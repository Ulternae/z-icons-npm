import React from 'react';

export interface LanCommentQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuoteRegular: React.FC<LanCommentQuoteRegularProps>;
export default LanCommentQuoteRegular;
