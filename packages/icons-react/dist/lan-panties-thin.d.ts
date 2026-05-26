import React from 'react';

export interface LanPantiesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantiesThin: React.FC<LanPantiesThinProps>;
export default LanPantiesThin;
