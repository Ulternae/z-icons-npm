import React from 'react';

export interface LanSdCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCards(props: LanSdCardsProps): React.ReactElement;
export default LanSdCards;
