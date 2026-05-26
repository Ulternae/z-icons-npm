import React from 'react';

export interface LanPineappleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPineapple: React.FC<LanPineappleProps>;
export default LanPineapple;
