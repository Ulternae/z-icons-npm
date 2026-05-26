import React from 'react';

export interface LanHandHoldingUsdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingUsdThin: React.FC<LanHandHoldingUsdThinProps>;
export default LanHandHoldingUsdThin;
