import React from 'react';

export interface LanCarPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarPeople: React.FC<LanCarPeopleProps>;
export default LanCarPeople;
