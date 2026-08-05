import React from 'react';

export interface NeoBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBlockQuote(props: NeoBlockQuoteProps): React.ReactElement;
export default NeoBlockQuote;
