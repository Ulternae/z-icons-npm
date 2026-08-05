import React from 'react';

export interface LanBottleWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleWaterThin(props: LanBottleWaterThinProps): React.ReactElement;
export default LanBottleWaterThin;
