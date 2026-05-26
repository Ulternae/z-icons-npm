import React from 'react';

export interface LanQuotesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuotesThin: React.FC<LanQuotesThinProps>;
export default LanQuotesThin;
