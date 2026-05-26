import React from 'react';

export interface LanHandHoldingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingThin: React.FC<LanHandHoldingThinProps>;
export default LanHandHoldingThin;
