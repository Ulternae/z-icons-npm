import React from 'react';

export interface LanCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCards(props: LanCardsProps): React.ReactElement;
export default LanCards;
