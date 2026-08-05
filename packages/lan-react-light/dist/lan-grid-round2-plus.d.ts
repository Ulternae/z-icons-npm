import React from 'react';

export interface LanGridRound2PlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound2Plus(props: LanGridRound2PlusProps): React.ReactElement;
export default LanGridRound2Plus;
