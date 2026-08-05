import React from 'react';

export interface LanCommentQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuote(props: LanCommentQuoteProps): React.ReactElement;
export default LanCommentQuote;
