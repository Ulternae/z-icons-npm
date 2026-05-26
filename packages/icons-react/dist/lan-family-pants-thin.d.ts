import React from 'react';

export interface LanFamilyPantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyPantsThin: React.FC<LanFamilyPantsThinProps>;
export default LanFamilyPantsThin;
