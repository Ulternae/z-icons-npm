import React from 'react';

export interface LanSdCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCards: React.FC<LanSdCardsProps>;
export default LanSdCards;
