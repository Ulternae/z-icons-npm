import React from 'react';

export interface LanCakeCandlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeCandlesThin: React.FC<LanCakeCandlesThinProps>;
export default LanCakeCandlesThin;
