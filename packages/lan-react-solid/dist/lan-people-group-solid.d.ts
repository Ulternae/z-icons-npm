import React from 'react';

export interface LanPeopleGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleGroupSolid(props: LanPeopleGroupSolidProps): React.ReactElement;
export default LanPeopleGroupSolid;
