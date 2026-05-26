import React from 'react';

export interface LanCommentQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuote: React.FC<LanCommentQuoteProps>;
export default LanCommentQuote;
