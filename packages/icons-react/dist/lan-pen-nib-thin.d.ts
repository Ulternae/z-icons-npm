import React from 'react';

export interface LanPenNibThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNibThin: React.FC<LanPenNibThinProps>;
export default LanPenNibThin;
