import React from 'react';

export interface LanPeopleGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleGroup: React.FC<LanPeopleGroupProps>;
export default LanPeopleGroup;
