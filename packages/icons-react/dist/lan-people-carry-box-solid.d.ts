import React from 'react';

export interface LanPeopleCarryBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleCarryBoxSolid: React.FC<LanPeopleCarryBoxSolidProps>;
export default LanPeopleCarryBoxSolid;
