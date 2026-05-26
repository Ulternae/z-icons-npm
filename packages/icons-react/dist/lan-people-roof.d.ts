import React from 'react';

export interface LanPeopleRoofProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRoof: React.FC<LanPeopleRoofProps>;
export default LanPeopleRoof;
