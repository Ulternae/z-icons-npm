import React from 'react';

export interface LanPantsStraightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsStraightThin: React.FC<LanPantsStraightThinProps>;
export default LanPantsStraightThin;
