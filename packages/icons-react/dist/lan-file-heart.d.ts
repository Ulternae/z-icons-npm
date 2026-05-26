import React from 'react';

export interface LanFileHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHeart: React.FC<LanFileHeartProps>;
export default LanFileHeart;
