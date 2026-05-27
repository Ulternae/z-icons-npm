import React from 'react';

export interface NeoQuoteLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuoteLeftSolid: React.FC<NeoQuoteLeftSolidProps>;
export default NeoQuoteLeftSolid;
