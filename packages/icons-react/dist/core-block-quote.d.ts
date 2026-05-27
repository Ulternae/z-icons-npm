import React from 'react';

export interface CoreBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBlockQuote: React.FC<CoreBlockQuoteProps>;
export default CoreBlockQuote;
