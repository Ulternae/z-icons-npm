import React from 'react';

export interface LanUserMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMinusThin: React.FC<LanUserMinusThinProps>;
export default LanUserMinusThin;
