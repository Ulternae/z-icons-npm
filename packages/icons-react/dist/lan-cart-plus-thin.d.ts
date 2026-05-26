import React from 'react';

export interface LanCartPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartPlusThin: React.FC<LanCartPlusThinProps>;
export default LanCartPlusThin;
