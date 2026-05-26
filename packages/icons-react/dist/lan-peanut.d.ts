import React from 'react';

export interface LanPeanutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanut: React.FC<LanPeanutProps>;
export default LanPeanut;
