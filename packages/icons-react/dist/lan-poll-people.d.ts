import React from 'react';

export interface LanPollPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPollPeople: React.FC<LanPollPeopleProps>;
export default LanPollPeople;
