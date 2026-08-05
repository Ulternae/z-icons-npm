import React from 'react';

export interface LanBottleWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleWater(props: LanBottleWaterProps): React.ReactElement;
export default LanBottleWater;
