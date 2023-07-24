import { WingetTools } from "../WingetTools";
import { promises as fs } from "fs";

type Mode = "to-winget" | "from-winget";

async function main(mode: Mode, input: string, output: string) {
    const tools = new WingetTools();
    if (mode == "to-winget") {
        const json = await tools.GetWinGetJson(input)
        await fs.writeFile(output, JSON.stringify(json, null, 2));
    }
    else if (mode == "from-winget") {
        const identifiers = await tools.GetPackageIdentifiers(input);
        await fs.writeFile(output, identifiers.join("\n"));
    };
}

main(process.argv[2] as Mode, process.argv[3], process.argv[4]);