import React from 'react';

export interface LanSquareRupiahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupiah: React.FC<LanSquareRupiahProps>;
export default LanSquareRupiah;
