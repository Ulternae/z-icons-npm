import React from 'react';

export interface LanBlockQuoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuote: React.FC<LanBlockQuoteProps>;
export default LanBlockQuote;
