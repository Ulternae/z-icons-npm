import React from 'react';

export interface LanDiceD12Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD12(props: LanDiceD12Props): React.ReactElement;
export default LanDiceD12;
