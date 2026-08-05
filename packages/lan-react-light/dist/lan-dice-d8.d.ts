import React from 'react';

export interface LanDiceD8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD8(props: LanDiceD8Props): React.ReactElement;
export default LanDiceD8;
