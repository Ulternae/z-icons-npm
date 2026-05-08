import React from 'react';

export interface MinaHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeart: React.FC<MinaHeartProps>;
export default MinaHeart;
