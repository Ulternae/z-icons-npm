import React from 'react';

export interface LanPenNibProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNib: React.FC<LanPenNibProps>;
export default LanPenNib;
