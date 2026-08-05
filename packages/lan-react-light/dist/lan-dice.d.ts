import React from 'react';

export interface LanDiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDice(props: LanDiceProps): React.ReactElement;
export default LanDice;
