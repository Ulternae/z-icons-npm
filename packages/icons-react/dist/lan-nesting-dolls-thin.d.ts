import React from 'react';

export interface LanNestingDollsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNestingDollsThin: React.FC<LanNestingDollsThinProps>;
export default LanNestingDollsThin;
