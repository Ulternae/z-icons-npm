import React from 'react';

export interface LanPokerChipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPokerChip(props: LanPokerChipProps): React.ReactElement;
export default LanPokerChip;
