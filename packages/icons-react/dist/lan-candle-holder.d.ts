import React from 'react';

export interface LanCandleHolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandleHolder: React.FC<LanCandleHolderProps>;
export default LanCandleHolder;
