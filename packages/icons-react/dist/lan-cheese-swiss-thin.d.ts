import React from 'react';

export interface LanCheeseSwissThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseSwissThin: React.FC<LanCheeseSwissThinProps>;
export default LanCheeseSwissThin;
