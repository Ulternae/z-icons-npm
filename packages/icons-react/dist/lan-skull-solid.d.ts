import React from 'react';

export interface LanSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullSolid: React.FC<LanSkullSolidProps>;
export default LanSkullSolid;
