import React from 'react';

export interface LanDiceD10Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD10(props: LanDiceD10Props): React.ReactElement;
export default LanDiceD10;
