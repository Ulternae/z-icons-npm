import React from 'react';

export interface LanFaceKissWinkHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissWinkHeart: React.FC<LanFaceKissWinkHeartProps>;
export default LanFaceKissWinkHeart;
