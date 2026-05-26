import React from 'react';

export interface LanCowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowSolid: React.FC<LanCowSolidProps>;
export default LanCowSolid;
