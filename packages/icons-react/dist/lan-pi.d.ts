import React from 'react';

export interface LanPiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPi: React.FC<LanPiProps>;
export default LanPi;
