import React from 'react';

export interface LanTrademarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrademarkSolid: React.FC<LanTrademarkSolidProps>;
export default LanTrademarkSolid;
