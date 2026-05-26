import React from 'react';

export interface LanBlockQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuoteRegular: React.FC<LanBlockQuoteRegularProps>;
export default LanBlockQuoteRegular;
