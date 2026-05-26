import React from 'react';

export interface LanPokerChipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPokerChipSolid: React.FC<LanPokerChipSolidProps>;
export default LanPokerChipSolid;
