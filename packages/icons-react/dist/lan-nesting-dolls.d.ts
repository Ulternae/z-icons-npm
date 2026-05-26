import React from 'react';

export interface LanNestingDollsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNestingDolls: React.FC<LanNestingDollsProps>;
export default LanNestingDolls;
