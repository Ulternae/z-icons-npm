import React from 'react';

export interface LanHandDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandDotsThin: React.FC<LanHandDotsThinProps>;
export default LanHandDotsThin;
