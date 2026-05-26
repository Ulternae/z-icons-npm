import React from 'react';

export interface LanShieldHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldHeart: React.FC<LanShieldHeartProps>;
export default LanShieldHeart;
