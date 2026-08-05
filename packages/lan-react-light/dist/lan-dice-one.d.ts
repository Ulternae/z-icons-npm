import React from 'react';

export interface LanDiceOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceOne(props: LanDiceOneProps): React.ReactElement;
export default LanDiceOne;
