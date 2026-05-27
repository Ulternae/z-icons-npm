import React from 'react';

export interface NeoBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBlockQuote: React.FC<NeoBlockQuoteProps>;
export default NeoBlockQuote;
