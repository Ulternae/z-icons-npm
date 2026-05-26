import React from 'react';

export interface LanWeightHangingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightHangingRegular: React.FC<LanWeightHangingRegularProps>;
export default LanWeightHangingRegular;
