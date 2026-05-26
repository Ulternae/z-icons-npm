import React from 'react';

export interface LanCampgroundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampgroundSolid: React.FC<LanCampgroundSolidProps>;
export default LanCampgroundSolid;
