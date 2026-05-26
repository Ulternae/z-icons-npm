import React from 'react';

export interface LanCircleNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNodesThin: React.FC<LanCircleNodesThinProps>;
export default LanCircleNodesThin;
