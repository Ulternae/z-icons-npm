import React from 'react';

export interface LanPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeople(props: LanPeopleProps): React.ReactElement;
export default LanPeople;
