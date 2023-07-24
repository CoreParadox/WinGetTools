# WinGetTools
Some TS scripts to manipulate winget format json easily

1. Convert Winget Json into a return separated txt file
2. Convert back from plain text to winget json, parsing "-v {version}" and ":" for msstore apps (winget export doesn't export these due to a bug as of 7/24/23)

For example:
```
REALiX.HWiNFO -v 7.20
ShareX.ShareX
Affinity Photo: 9P8DVF1XW02V
```

Turns into 

```
[
  {
    "Packages": [
      {
        "PackageIdentifier": "REALiX.HWiNFO",
        "Version": "7.20"
      },
      {
        "PackageIdentifier": "ShareX.ShareX"
      }
    ],
    "SourceDetails": {
      "Argument": "https://cdn.winget.microsoft.com/cache",
      "Identifier": "Microsoft.Winget.Source_8wekyb3d8bbwe",
      "Name": "winget",
      "Type": "Microsoft.PreIndexed.Package"
    }
  },
  {
    "Packages": [
      {
        "PackageIdentifier": "9P8DVF1XW02V",
        "Description": "Affinity Photo"
      }
    ],
    "SourceDetails": {
      "Argument": "https://storeedgefd.dsx.mp.microsoft.com/v9.0",
      "Identifier": "StoreEdgeFD",
      "Name": "msstore",
      "Type": "Microsoft.Rest"
    }
  }
]
```

making it easy to manually build your own list with just a few lines, instead of a ton of tiny json objects.

May improve the format later, but just needed something hacky for now.
