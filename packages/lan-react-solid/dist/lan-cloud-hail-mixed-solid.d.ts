import React from 'react';

export interface LanCloudHailMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHailMixedSolid(props: LanCloudHailMixedSolidProps): React.ReactElement;
export default LanCloudHailMixedSolid;
