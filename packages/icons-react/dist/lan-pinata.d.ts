import React from 'react';

export interface LanPinataProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinata: React.FC<LanPinataProps>;
export default LanPinata;
