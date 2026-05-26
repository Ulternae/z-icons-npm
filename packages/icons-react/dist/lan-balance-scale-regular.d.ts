import React from 'react';

export interface LanBalanceScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScaleRegular: React.FC<LanBalanceScaleRegularProps>;
export default LanBalanceScaleRegular;
