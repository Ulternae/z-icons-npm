import React from 'react';

export interface LanHandHoldingSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingSkull: React.FC<LanHandHoldingSkullProps>;
export default LanHandHoldingSkull;
