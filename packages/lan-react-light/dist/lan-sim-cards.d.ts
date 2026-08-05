import React from 'react';

export interface LanSimCardsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCards(props: LanSimCardsProps): React.ReactElement;
export default LanSimCards;
