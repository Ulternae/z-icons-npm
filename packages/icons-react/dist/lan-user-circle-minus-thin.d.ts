import React from 'react';

export interface LanUserCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCircleMinusThin: React.FC<LanUserCircleMinusThinProps>;
export default LanUserCircleMinusThin;
