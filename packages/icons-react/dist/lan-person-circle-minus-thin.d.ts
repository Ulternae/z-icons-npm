import React from 'react';

export interface LanPersonCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleMinusThin: React.FC<LanPersonCircleMinusThinProps>;
export default LanPersonCircleMinusThin;
