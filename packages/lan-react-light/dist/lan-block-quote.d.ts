import React from 'react';

export interface LanBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuote(props: LanBlockQuoteProps): React.ReactElement;
export default LanBlockQuote;
