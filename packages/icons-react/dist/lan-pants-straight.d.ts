import React from 'react';

export interface LanPantsStraightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsStraight: React.FC<LanPantsStraightProps>;
export default LanPantsStraight;
