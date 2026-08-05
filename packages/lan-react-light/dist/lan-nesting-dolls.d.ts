import React from 'react';

export interface LanNestingDollsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNestingDolls(props: LanNestingDollsProps): React.ReactElement;
export default LanNestingDolls;
