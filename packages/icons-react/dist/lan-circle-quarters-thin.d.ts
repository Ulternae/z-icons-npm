import React from 'react';

export interface LanCircleQuartersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuartersThin: React.FC<LanCircleQuartersThinProps>;
export default LanCircleQuartersThin;
