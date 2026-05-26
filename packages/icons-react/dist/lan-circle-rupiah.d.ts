import React from 'react';

export interface LanCircleRupiahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRupiah: React.FC<LanCircleRupiahProps>;
export default LanCircleRupiah;
