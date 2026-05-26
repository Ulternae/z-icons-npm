import React from 'react';

export interface LanEarMuffsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarMuffsThin: React.FC<LanEarMuffsThinProps>;
export default LanEarMuffsThin;
