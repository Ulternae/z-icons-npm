import React from 'react';

export interface LanHandHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHeart: React.FC<LanHandHeartProps>;
export default LanHandHeart;
