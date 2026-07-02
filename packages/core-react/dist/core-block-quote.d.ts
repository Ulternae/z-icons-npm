import React from 'react';

export interface CoreBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBlockQuote(props: CoreBlockQuoteProps): React.ReactElement;
export default CoreBlockQuote;
