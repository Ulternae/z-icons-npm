import React from 'react';

export interface LanHouseChimneyHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseChimneyHeart: React.FC<LanHouseChimneyHeartProps>;
export default LanHouseChimneyHeart;
