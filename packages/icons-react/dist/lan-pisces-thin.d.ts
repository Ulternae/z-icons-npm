import React from 'react';

export interface LanPiscesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiscesThin: React.FC<LanPiscesThinProps>;
export default LanPiscesThin;
