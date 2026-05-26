import React from 'react';

export interface LanHandHoldingMagicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingMagicThin: React.FC<LanHandHoldingMagicThinProps>;
export default LanHandHoldingMagicThin;
