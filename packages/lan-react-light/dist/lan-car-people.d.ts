import React from 'react';

export interface LanCarPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarPeople(props: LanCarPeopleProps): React.ReactElement;
export default LanCarPeople;
