import React from 'react';

export interface LanHandsHoldingCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingCircle: React.FC<LanHandsHoldingCircleProps>;
export default LanHandsHoldingCircle;
