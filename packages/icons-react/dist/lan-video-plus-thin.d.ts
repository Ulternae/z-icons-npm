import React from 'react';

export interface LanVideoPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoPlusThin: React.FC<LanVideoPlusThinProps>;
export default LanVideoPlusThin;
