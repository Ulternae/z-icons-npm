import React from 'react';

export interface LanPeopleGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleGroupThin: React.FC<LanPeopleGroupThinProps>;
export default LanPeopleGroupThin;
