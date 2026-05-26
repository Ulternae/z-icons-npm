import React from 'react';

export interface LanPeopleGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleGroupSolid: React.FC<LanPeopleGroupSolidProps>;
export default LanPeopleGroupSolid;
