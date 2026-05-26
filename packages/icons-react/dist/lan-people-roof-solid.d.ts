import React from 'react';

export interface LanPeopleRoofSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRoofSolid: React.FC<LanPeopleRoofSolidProps>;
export default LanPeopleRoofSolid;
