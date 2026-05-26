import React from 'react';

export interface LanCoinsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinsThin: React.FC<LanCoinsThinProps>;
export default LanCoinsThin;
