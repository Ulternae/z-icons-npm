import React from 'react';

export interface LanPokerChipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPokerChipSolid(props: LanPokerChipSolidProps): React.ReactElement;
export default LanPokerChipSolid;
