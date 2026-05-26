import React from 'react';

export interface LanGripDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsThin: React.FC<LanGripDotsThinProps>;
export default LanGripDotsThin;
