import React from 'react';

export interface LanBookHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookHeart: React.FC<LanBookHeartProps>;
export default LanBookHeart;
