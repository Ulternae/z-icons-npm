import React from 'react';

export interface LanDiceD8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD8Regular(props: LanDiceD8RegularProps): React.ReactElement;
export default LanDiceD8Regular;
