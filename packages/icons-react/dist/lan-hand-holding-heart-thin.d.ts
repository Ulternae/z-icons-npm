import React from 'react';

export interface LanHandHoldingHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingHeartThin: React.FC<LanHandHoldingHeartThinProps>;
export default LanHandHoldingHeartThin;
