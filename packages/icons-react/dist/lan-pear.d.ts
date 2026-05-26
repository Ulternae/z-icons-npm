import React from 'react';

export interface LanPearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPear: React.FC<LanPearProps>;
export default LanPear;
