import React from 'react';

export interface LanDiceD4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD4(props: LanDiceD4Props): React.ReactElement;
export default LanDiceD4;
