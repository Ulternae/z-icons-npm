import React from 'react';

export interface LanDiceD20Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD20(props: LanDiceD20Props): React.ReactElement;
export default LanDiceD20;
