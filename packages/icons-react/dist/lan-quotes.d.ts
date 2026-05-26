import React from 'react';

export interface LanQuotesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuotes: React.FC<LanQuotesProps>;
export default LanQuotes;
