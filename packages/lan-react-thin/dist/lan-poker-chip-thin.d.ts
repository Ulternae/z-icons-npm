import React from 'react';

export interface LanPokerChipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPokerChipThin(props: LanPokerChipThinProps): React.ReactElement;
export default LanPokerChipThin;
