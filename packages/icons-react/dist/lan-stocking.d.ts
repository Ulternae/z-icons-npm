import React from 'react';

export interface LanStockingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStocking: React.FC<LanStockingProps>;
export default LanStocking;
