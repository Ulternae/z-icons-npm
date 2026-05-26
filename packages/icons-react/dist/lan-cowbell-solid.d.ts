import React from 'react';

export interface LanCowbellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellSolid: React.FC<LanCowbellSolidProps>;
export default LanCowbellSolid;
