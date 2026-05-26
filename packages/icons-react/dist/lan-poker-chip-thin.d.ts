import React from 'react';

export interface LanPokerChipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPokerChipThin: React.FC<LanPokerChipThinProps>;
export default LanPokerChipThin;
