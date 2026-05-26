import React from 'react';

export interface LanCardsBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsBlankRegular: React.FC<LanCardsBlankRegularProps>;
export default LanCardsBlankRegular;
