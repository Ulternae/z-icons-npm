import React from 'react';

export interface LanHomeHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeHeart: React.FC<LanHomeHeartProps>;
export default LanHomeHeart;
