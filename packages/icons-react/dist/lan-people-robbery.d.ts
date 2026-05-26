import React from 'react';

export interface LanPeopleRobberyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRobbery: React.FC<LanPeopleRobberyProps>;
export default LanPeopleRobbery;
