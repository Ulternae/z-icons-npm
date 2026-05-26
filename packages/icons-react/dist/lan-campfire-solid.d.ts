import React from 'react';

export interface LanCampfireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampfireSolid: React.FC<LanCampfireSolidProps>;
export default LanCampfireSolid;
