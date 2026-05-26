import React from 'react';

export interface LanFilesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesThin: React.FC<LanFilesThinProps>;
export default LanFilesThin;
