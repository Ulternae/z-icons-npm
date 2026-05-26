import React from 'react';

export interface LanHandPointUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointUpSolid: React.FC<LanHandPointUpSolidProps>;
export default LanHandPointUpSolid;
