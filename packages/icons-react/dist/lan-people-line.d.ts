import React from 'react';

export interface LanPeopleLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleLine: React.FC<LanPeopleLineProps>;
export default LanPeopleLine;
