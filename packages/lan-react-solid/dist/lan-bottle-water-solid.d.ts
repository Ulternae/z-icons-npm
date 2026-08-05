import React from 'react';

export interface LanBottleWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleWaterSolid(props: LanBottleWaterSolidProps): React.ReactElement;
export default LanBottleWaterSolid;
