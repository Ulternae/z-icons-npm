import React from 'react';

export interface LanWeightScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightScaleRegular: React.FC<LanWeightScaleRegularProps>;
export default LanWeightScaleRegular;
