import React from 'react';

export interface LanHandHoldingHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingHeart: React.FC<LanHandHoldingHeartProps>;
export default LanHandHoldingHeart;
