import React from 'react';

export interface LanSimCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCards: React.FC<LanSimCardsProps>;
export default LanSimCards;
