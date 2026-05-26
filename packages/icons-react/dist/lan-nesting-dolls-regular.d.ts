import React from 'react';

export interface LanNestingDollsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNestingDollsRegular: React.FC<LanNestingDollsRegularProps>;
export default LanNestingDollsRegular;
