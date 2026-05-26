import React from 'react';

export interface LanBalanceScaleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScaleLeft: React.FC<LanBalanceScaleLeftProps>;
export default LanBalanceScaleLeft;
