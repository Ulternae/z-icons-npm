import React from 'react';

export interface NeoQuoteLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuoteLeft: React.FC<NeoQuoteLeftProps>;
export default NeoQuoteLeft;
