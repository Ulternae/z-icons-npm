import React from 'react';

export interface LanObjectSubtractRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectSubtractRegular: React.FC<LanObjectSubtractRegularProps>;
export default LanObjectSubtractRegular;
