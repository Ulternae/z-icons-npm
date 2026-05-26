import React from 'react';

export interface LanCommentAltQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltQuote: React.FC<LanCommentAltQuoteProps>;
export default LanCommentAltQuote;
