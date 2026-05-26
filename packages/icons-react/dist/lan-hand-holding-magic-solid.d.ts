import React from 'react';

export interface LanHandHoldingMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingMagicSolid: React.FC<LanHandHoldingMagicSolidProps>;
export default LanHandHoldingMagicSolid;
