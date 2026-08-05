import React from 'react';

export interface LanPeopleRoofSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleRoofSolid(props: LanPeopleRoofSolidProps): React.ReactElement;
export default LanPeopleRoofSolid;
