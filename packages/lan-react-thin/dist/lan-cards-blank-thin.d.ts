import React from 'react';

export interface LanCardsBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsBlankThin(props: LanCardsBlankThinProps): React.ReactElement;
export default LanCardsBlankThin;
