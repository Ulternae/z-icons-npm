import React from 'react';

export interface LanHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeart: React.FC<LanHeartProps>;
export default LanHeart;
