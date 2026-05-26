import React from 'react';

export interface LanTrademarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrademarkThin: React.FC<LanTrademarkThinProps>;
export default LanTrademarkThin;
