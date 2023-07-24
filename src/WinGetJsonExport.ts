import { PackageSource } from "./PackageSource";

export class WingetJsonExport {
    public readonly $schema = "https://aka.ms/winget-packages.schema.2.0.json";
    public Sources: PackageSource[] = [];
}