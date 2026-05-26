import React from 'react';

export interface LanStockingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStockingSolid: React.FC<LanStockingSolidProps>;
export default LanStockingSolid;
