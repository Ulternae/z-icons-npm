import React from 'react';

export interface LanBoxHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxHeart: React.FC<LanBoxHeartProps>;
export default LanBoxHeart;
