import React from 'react';

export interface LanHandPointLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointLeftSolid: React.FC<LanHandPointLeftSolidProps>;
export default LanHandPointLeftSolid;
