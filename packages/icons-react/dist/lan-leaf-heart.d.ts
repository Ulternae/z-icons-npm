import React from 'react';

export interface LanLeafHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafHeart: React.FC<LanLeafHeartProps>;
export default LanLeafHeart;
