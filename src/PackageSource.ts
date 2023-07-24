import { Package } from './Package';
import { SourceDetail } from './SourceDetail';

export interface PackageSource {
    Packages: Package[]
    SourceDetails: SourceDetail,
};
