import React from 'react';

export interface CoreQuotesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreQuotesRegularDuo: React.FC<CoreQuotesRegularDuoProps>;
export default CoreQuotesRegularDuo;
