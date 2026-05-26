import React from 'react';

export interface LanPokerChipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPokerChipRegular: React.FC<LanPokerChipRegularProps>;
export default LanPokerChipRegular;
