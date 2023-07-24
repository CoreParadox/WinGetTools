export interface SourceDetail {
    Argument: string;
    Identifier: string;
    Name: string;
    Type: string;
}
export const WinGetSourceDetails: SourceDetail = {
    Argument: "https://cdn.winget.microsoft.com/cache",
    Identifier: "Microsoft.Winget.Source_8wekyb3d8bbwe",
    Name: "winget",
    Type: "Microsoft.PreIndexed.Package",
};

export const MsStoreSourceDetails: SourceDetail = {
    Argument: "https://storeedgefd.dsx.mp.microsoft.com/v9.0",
    Identifier: "StoreEdgeFD",
    Name: "msstore",
    Type: "Microsoft.Rest",
};