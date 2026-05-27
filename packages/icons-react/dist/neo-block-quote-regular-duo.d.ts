import React from 'react';

export interface NeoBlockQuoteRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBlockQuoteRegularDuo: React.FC<NeoBlockQuoteRegularDuoProps>;
export default NeoBlockQuoteRegularDuo;
