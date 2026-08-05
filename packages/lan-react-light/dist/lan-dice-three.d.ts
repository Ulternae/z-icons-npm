import React from 'react';

export interface LanDiceThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceThree(props: LanDiceThreeProps): React.ReactElement;
export default LanDiceThree;
