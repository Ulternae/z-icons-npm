import React from 'react';

export interface LanCandleHolderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandleHolderRegular(props: LanCandleHolderRegularProps): React.ReactElement;
export default LanCandleHolderRegular;
