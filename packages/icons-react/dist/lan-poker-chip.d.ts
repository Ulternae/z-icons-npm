import React from 'react';

export interface LanPokerChipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPokerChip: React.FC<LanPokerChipProps>;
export default LanPokerChip;
