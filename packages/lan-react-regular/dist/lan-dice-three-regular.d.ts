import React from 'react';

export interface LanDiceThreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceThreeRegular(props: LanDiceThreeRegularProps): React.ReactElement;
export default LanDiceThreeRegular;
