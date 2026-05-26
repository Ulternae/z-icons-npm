import React from 'react';

export interface LanCandleHolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandleHolderSolid: React.FC<LanCandleHolderSolidProps>;
export default LanCandleHolderSolid;
