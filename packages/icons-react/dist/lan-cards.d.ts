import React from 'react';

export interface LanCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCards: React.FC<LanCardsProps>;
export default LanCards;
