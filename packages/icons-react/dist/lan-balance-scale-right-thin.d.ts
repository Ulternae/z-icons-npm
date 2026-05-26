import React from 'react';

export interface LanBalanceScaleRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalanceScaleRightThin: React.FC<LanBalanceScaleRightThinProps>;
export default LanBalanceScaleRightThin;
