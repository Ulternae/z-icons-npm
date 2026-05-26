import React from 'react';

export interface LanHandHoldingHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingHandSolid: React.FC<LanHandHoldingHandSolidProps>;
export default LanHandHoldingHandSolid;
