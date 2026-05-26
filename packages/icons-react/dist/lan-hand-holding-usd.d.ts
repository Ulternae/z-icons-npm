import React from 'react';

export interface LanHandHoldingUsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingUsd: React.FC<LanHandHoldingUsdProps>;
export default LanHandHoldingUsd;
