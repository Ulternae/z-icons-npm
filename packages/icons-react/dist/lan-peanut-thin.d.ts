import React from 'react';

export interface LanPeanutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutThin: React.FC<LanPeanutThinProps>;
export default LanPeanutThin;
