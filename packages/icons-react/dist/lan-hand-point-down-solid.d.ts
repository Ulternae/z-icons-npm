import React from 'react';

export interface LanHandPointDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointDownSolid: React.FC<LanHandPointDownSolidProps>;
export default LanHandPointDownSolid;
