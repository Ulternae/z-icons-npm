import React from 'react';

export interface LanGridRound2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound2(props: LanGridRound2Props): React.ReactElement;
export default LanGridRound2;
