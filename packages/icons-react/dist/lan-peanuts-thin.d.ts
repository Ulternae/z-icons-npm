import React from 'react';

export interface LanPeanutsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutsThin: React.FC<LanPeanutsThinProps>;
export default LanPeanutsThin;
