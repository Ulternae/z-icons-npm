import React from 'react';

export interface LanSquareQuartersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuartersThin: React.FC<LanSquareQuartersThinProps>;
export default LanSquareQuartersThin;
