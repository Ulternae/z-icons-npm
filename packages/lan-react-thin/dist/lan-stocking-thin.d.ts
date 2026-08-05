import React from 'react';

export interface LanStockingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStockingThin(props: LanStockingThinProps): React.ReactElement;
export default LanStockingThin;
