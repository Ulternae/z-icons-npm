import React from 'react';

export interface LanPeopleRoofProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleRoof(props: LanPeopleRoofProps): React.ReactElement;
export default LanPeopleRoof;
