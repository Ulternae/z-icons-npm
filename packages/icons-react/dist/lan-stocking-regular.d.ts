import React from 'react';

export interface LanStockingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStockingRegular: React.FC<LanStockingRegularProps>;
export default LanStockingRegular;
