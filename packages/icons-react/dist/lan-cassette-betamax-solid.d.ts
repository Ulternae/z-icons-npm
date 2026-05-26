import React from 'react';

export interface LanCassetteBetamaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteBetamaxSolid: React.FC<LanCassetteBetamaxSolidProps>;
export default LanCassetteBetamaxSolid;
