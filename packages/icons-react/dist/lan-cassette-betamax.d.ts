import React from 'react';

export interface LanCassetteBetamaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteBetamax: React.FC<LanCassetteBetamaxProps>;
export default LanCassetteBetamax;
