import React from 'react';

export interface LanSwapArrowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapArrowsRegular: React.FC<LanSwapArrowsRegularProps>;
export default LanSwapArrowsRegular;
