import React from 'react';

export interface LanPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusThin: React.FC<LanPlusThinProps>;
export default LanPlusThin;
