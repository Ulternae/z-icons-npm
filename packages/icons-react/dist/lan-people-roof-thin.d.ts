import React from 'react';

export interface LanPeopleRoofThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRoofThin: React.FC<LanPeopleRoofThinProps>;
export default LanPeopleRoofThin;
