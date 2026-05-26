import React from 'react';

export interface LanHandHoldingUsdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingUsdSolid: React.FC<LanHandHoldingUsdSolidProps>;
export default LanHandHoldingUsdSolid;
