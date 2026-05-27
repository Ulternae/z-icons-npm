import React from 'react';

export interface NeoHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeart: React.FC<NeoHeartProps>;
export default NeoHeart;
