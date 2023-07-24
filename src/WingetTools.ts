import { promises as fs } from "fs";
import { Package } from "./Package";
import { WingetJsonExport } from "./WinGetJsonExport";
import { MsStoreSourceDetails, SourceDetail, WinGetSourceDetails } from "./SourceDetail";
import { PackageSource } from "./PackageSource";

export class WingetTools {

  public async GetPackageIdentifiers(path: string): Promise<string[]> {
    var json = await this.loadJson(path);
    return json.winget.Sources[0].Packages.map((p: Package) => p.PackageIdentifier);
  }

  public async GetWinGetJson(path: string) {
    let lines = (await fs.readFile(path, "utf8")).split("\n");
    return new WingetJsonExport().Sources = [this.getWingetPackages(lines), this.getWinstorePackages(lines)]
  }

  private async loadJson(path: string) {
    return JSON.parse(await fs.readFile(path, "utf8"));
  }

  private getWingetPackages(lines: string[]): PackageSource {
    return {
      Packages: lines.filter((l) => !l.includes(":")).map(this.parsePackageString),
      SourceDetails: WinGetSourceDetails
    }
  }

  private getWinstorePackages(lines: string[]) {
    return {
      Packages: lines.filter((l) => l.includes(":")).map(this.parseWinstorePackageString),
      SourceDetails: MsStoreSourceDetails
    }
  }

  private parsePackageString(line: string) {
    return line.includes("-v") ? {
      PackageIdentifier: line.split("-v")[0].trim(),
      Version: line.split("-v")[1].trim(),
    } : {
      PackageIdentifier: line.trim(),
    };
  }

  private parseWinstorePackageString(line: string) {
    return {
      PackageIdentifier: line.split(":")[1].trim(),
      Description: line.split(":")[0].trim(),
    };
  }

}
