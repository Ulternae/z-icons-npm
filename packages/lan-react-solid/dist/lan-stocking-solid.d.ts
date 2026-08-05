import React from 'react';

export interface LanStockingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStockingSolid(props: LanStockingSolidProps): React.ReactElement;
export default LanStockingSolid;
