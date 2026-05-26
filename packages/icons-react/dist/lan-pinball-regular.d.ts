import React from 'react';

export interface LanPinballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinballRegular: React.FC<LanPinballRegularProps>;
export default LanPinballRegular;
