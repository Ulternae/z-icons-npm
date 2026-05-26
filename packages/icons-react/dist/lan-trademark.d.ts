import React from 'react';

export interface LanTrademarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrademark: React.FC<LanTrademarkProps>;
export default LanTrademark;
