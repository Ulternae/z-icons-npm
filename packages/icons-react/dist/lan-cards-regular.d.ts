import React from 'react';

export interface LanCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsRegular: React.FC<LanCardsRegularProps>;
export default LanCardsRegular;
