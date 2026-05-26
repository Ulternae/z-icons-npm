import React from 'react';

export interface LanCircleEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEqualsThin: React.FC<LanCircleEqualsThinProps>;
export default LanCircleEqualsThin;
