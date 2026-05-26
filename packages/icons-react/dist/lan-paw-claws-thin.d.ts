import React from 'react';

export interface LanPawClawsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawClawsThin: React.FC<LanPawClawsThinProps>;
export default LanPawClawsThin;
