import React from 'react';

export interface LanCandleHolderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandleHolderThin: React.FC<LanCandleHolderThinProps>;
export default LanCandleHolderThin;
