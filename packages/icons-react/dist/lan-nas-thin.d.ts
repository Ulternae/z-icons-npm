import React from 'react';

export interface LanNasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNasThin: React.FC<LanNasThinProps>;
export default LanNasThin;
