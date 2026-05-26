import React from 'react';

export interface LanExpandArrowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandArrowsThin: React.FC<LanExpandArrowsThinProps>;
export default LanExpandArrowsThin;
