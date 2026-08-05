import React from 'react';

export interface LanDiceD6Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD6(props: LanDiceD6Props): React.ReactElement;
export default LanDiceD6;
