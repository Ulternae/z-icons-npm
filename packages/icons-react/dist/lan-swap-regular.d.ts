import React from 'react';

export interface LanSwapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapRegular: React.FC<LanSwapRegularProps>;
export default LanSwapRegular;
