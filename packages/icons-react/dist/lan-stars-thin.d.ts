import React from 'react';

export interface LanStarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarsThin: React.FC<LanStarsThinProps>;
export default LanStarsThin;
