import React from 'react';

export interface LanPeopleSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleSimpleSolid(props: LanPeopleSimpleSolidProps): React.ReactElement;
export default LanPeopleSimpleSolid;
