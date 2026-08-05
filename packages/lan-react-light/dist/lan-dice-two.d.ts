import React from 'react';

export interface LanDiceTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceTwo(props: LanDiceTwoProps): React.ReactElement;
export default LanDiceTwo;
