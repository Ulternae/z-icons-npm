import React from 'react';

export interface LanSquareQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuoteRegular: React.FC<LanSquareQuoteRegularProps>;
export default LanSquareQuoteRegular;
