import React from 'react';

export interface LanCloudMeatballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMeatballSolid(props: LanCloudMeatballSolidProps): React.ReactElement;
export default LanCloudMeatballSolid;
