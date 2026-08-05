import React from 'react';

export interface LanCloudRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainbowSolid(props: LanCloudRainbowSolidProps): React.ReactElement;
export default LanCloudRainbowSolid;
