import React from 'react';

export interface LanPantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsThin: React.FC<LanPantsThinProps>;
export default LanPantsThin;
