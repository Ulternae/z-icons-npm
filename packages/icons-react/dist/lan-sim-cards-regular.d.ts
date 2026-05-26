import React from 'react';

export interface LanSimCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardsRegular: React.FC<LanSimCardsRegularProps>;
export default LanSimCardsRegular;
