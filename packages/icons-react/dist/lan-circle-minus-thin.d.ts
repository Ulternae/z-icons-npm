import React from 'react';

export interface LanCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMinusThin: React.FC<LanCircleMinusThinProps>;
export default LanCircleMinusThin;
