import React from 'react';

export interface LanPeopleRoofRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRoofRegular: React.FC<LanPeopleRoofRegularProps>;
export default LanPeopleRoofRegular;
