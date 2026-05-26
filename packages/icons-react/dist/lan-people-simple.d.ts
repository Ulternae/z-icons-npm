import React from 'react';

export interface LanPeopleSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleSimple: React.FC<LanPeopleSimpleProps>;
export default LanPeopleSimple;
