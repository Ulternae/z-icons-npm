import React from 'react';

export interface LanTrademarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrademarkRegular: React.FC<LanTrademarkRegularProps>;
export default LanTrademarkRegular;
