import React from 'react';

export interface LanDiceD4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD4Regular(props: LanDiceD4RegularProps): React.ReactElement;
export default LanDiceD4Regular;
