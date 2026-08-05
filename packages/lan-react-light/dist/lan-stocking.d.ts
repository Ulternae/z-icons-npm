import React from 'react';

export interface LanStockingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStocking(props: LanStockingProps): React.ReactElement;
export default LanStocking;
