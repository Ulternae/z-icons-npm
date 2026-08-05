import React from 'react';

export interface LanPokerChipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPokerChipRegular(props: LanPokerChipRegularProps): React.ReactElement;
export default LanPokerChipRegular;
