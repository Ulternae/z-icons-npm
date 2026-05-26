import React from 'react';

export interface LanFileMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMinusThin: React.FC<LanFileMinusThinProps>;
export default LanFileMinusThin;
