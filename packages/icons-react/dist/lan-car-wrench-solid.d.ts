import React from 'react';

export interface LanCarWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWrenchSolid: React.FC<LanCarWrenchSolidProps>;
export default LanCarWrenchSolid;
