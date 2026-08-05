import React from 'react';

export interface LanCommentQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuoteRegular(props: LanCommentQuoteRegularProps): React.ReactElement;
export default LanCommentQuoteRegular;
