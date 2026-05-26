import React from 'react';

export interface LanHandsHoldingHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingHeart: React.FC<LanHandsHoldingHeartProps>;
export default LanHandsHoldingHeart;
