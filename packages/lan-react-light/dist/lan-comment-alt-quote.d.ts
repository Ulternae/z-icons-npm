import React from 'react';

export interface LanCommentAltQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltQuote(props: LanCommentAltQuoteProps): React.ReactElement;
export default LanCommentAltQuote;
