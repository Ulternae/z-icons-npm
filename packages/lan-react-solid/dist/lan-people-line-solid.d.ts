import React from 'react';

export interface LanPeopleLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleLineSolid(props: LanPeopleLineSolidProps): React.ReactElement;
export default LanPeopleLineSolid;
