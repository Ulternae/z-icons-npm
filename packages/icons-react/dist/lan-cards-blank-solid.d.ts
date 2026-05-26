import React from 'react';

export interface LanCardsBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardsBlankSolid: React.FC<LanCardsBlankSolidProps>;
export default LanCardsBlankSolid;
