import React from 'react';

export interface LanFileCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleMinusThin: React.FC<LanFileCircleMinusThinProps>;
export default LanFileCircleMinusThin;
