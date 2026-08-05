import React from 'react';

export interface LanBottleDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleDropletSolid(props: LanBottleDropletSolidProps): React.ReactElement;
export default LanBottleDropletSolid;
