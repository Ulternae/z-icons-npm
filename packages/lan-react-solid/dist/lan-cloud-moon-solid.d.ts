import React from 'react';

export interface LanCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoonSolid(props: LanCloudMoonSolidProps): React.ReactElement;
export default LanCloudMoonSolid;
