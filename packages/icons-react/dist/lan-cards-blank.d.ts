import React from 'react';

export interface LanCardsBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsBlank: React.FC<LanCardsBlankProps>;
export default LanCardsBlank;
