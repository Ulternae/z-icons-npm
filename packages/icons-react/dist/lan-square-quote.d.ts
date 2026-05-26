import React from 'react';

export interface LanSquareQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuote: React.FC<LanSquareQuoteProps>;
export default LanSquareQuote;
