import React from 'react';

export interface LanPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeople: React.FC<LanPeopleProps>;
export default LanPeople;
