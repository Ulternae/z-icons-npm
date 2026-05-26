import React from 'react';

export interface LanPeopleLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleLineSolid: React.FC<LanPeopleLineSolidProps>;
export default LanPeopleLineSolid;
