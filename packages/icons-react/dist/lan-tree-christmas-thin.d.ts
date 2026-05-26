import React from 'react';

export interface LanTreeChristmasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeChristmasThin: React.FC<LanTreeChristmasThinProps>;
export default LanTreeChristmasThin;
