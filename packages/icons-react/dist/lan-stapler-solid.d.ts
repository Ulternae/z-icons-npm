import React from 'react';

export interface LanStaplerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaplerSolid: React.FC<LanStaplerSolidProps>;
export default LanStaplerSolid;
