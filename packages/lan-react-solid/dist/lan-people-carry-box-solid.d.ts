import React from 'react';

export interface LanPeopleCarryBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleCarryBoxSolid(props: LanPeopleCarryBoxSolidProps): React.ReactElement;
export default LanPeopleCarryBoxSolid;
