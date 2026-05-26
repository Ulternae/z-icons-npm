import React from 'react';

export interface LanCardsBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsBlankThin: React.FC<LanCardsBlankThinProps>;
export default LanCardsBlankThin;
