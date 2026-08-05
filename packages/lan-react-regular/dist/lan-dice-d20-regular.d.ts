import React from 'react';

export interface LanDiceD20RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD20Regular(props: LanDiceD20RegularProps): React.ReactElement;
export default LanDiceD20Regular;
