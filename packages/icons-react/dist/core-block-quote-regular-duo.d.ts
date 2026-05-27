import React from 'react';

export interface CoreBlockQuoteRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBlockQuoteRegularDuo: React.FC<CoreBlockQuoteRegularDuoProps>;
export default CoreBlockQuoteRegularDuo;
