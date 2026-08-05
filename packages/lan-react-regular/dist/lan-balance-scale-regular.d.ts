import React from 'react';

export interface LanBalanceScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScaleRegular(props: LanBalanceScaleRegularProps): React.ReactElement;
export default LanBalanceScaleRegular;
