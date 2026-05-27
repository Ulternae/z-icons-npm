import React from 'react';

export interface CoreHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeart: React.FC<CoreHeartProps>;
export default CoreHeart;
