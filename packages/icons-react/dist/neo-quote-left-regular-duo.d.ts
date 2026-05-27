import React from 'react';

export interface NeoQuoteLeftRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuoteLeftRegularDuo: React.FC<NeoQuoteLeftRegularDuoProps>;
export default NeoQuoteLeftRegularDuo;
