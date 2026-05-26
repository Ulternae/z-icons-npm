import React from 'react';

export interface LanCardHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardHeart: React.FC<LanCardHeartProps>;
export default LanCardHeart;
