import React from 'react';

export interface LanQuotesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuotesRegular: React.FC<LanQuotesRegularProps>;
export default LanQuotesRegular;
