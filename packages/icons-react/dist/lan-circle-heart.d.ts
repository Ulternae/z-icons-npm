import React from 'react';

export interface LanCircleHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHeart: React.FC<LanCircleHeartProps>;
export default LanCircleHeart;
