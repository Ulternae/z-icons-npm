import React from 'react';

export interface LanJeansThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansThin: React.FC<LanJeansThinProps>;
export default LanJeansThin;
