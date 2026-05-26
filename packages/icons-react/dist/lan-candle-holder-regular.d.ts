import React from 'react';

export interface LanCandleHolderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandleHolderRegular: React.FC<LanCandleHolderRegularProps>;
export default LanCandleHolderRegular;
