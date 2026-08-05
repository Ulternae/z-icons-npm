import React from 'react';

export interface LanStockingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStockingRegular(props: LanStockingRegularProps): React.ReactElement;
export default LanStockingRegular;
