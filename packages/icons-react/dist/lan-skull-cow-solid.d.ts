import React from 'react';

export interface LanSkullCowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCowSolid: React.FC<LanSkullCowSolidProps>;
export default LanSkullCowSolid;
