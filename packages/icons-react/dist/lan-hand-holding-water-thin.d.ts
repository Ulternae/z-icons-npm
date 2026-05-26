import React from 'react';

export interface LanHandHoldingWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingWaterThin: React.FC<LanHandHoldingWaterThinProps>;
export default LanHandHoldingWaterThin;
