import React from 'react';

export interface LanHandHoldingStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingStarThin: React.FC<LanHandHoldingStarThinProps>;
export default LanHandHoldingStarThin;
