import React from 'react';

export interface LanPeopleSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleSimpleSolid: React.FC<LanPeopleSimpleSolidProps>;
export default LanPeopleSimpleSolid;
