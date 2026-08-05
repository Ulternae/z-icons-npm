import React from 'react';

export interface LanCloudRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainSolid(props: LanCloudRainSolidProps): React.ReactElement;
export default LanCloudRainSolid;
