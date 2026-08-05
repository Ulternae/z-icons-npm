import React from 'react';

export interface LanSquareQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuote(props: LanSquareQuoteProps): React.ReactElement;
export default LanSquareQuote;
