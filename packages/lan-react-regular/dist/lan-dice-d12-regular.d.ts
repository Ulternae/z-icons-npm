import React from 'react';

export interface LanDiceD12RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD12Regular(props: LanDiceD12RegularProps): React.ReactElement;
export default LanDiceD12Regular;
