import React from 'react';

export interface LanDiceD6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD6Regular(props: LanDiceD6RegularProps): React.ReactElement;
export default LanDiceD6Regular;
