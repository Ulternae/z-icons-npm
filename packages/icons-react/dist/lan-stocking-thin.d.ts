import React from 'react';

export interface LanStockingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStockingThin: React.FC<LanStockingThinProps>;
export default LanStockingThin;
