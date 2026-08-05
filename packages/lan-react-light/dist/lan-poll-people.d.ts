import React from 'react';

export interface LanPollPeopleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPollPeople(props: LanPollPeopleProps): React.ReactElement;
export default LanPollPeople;
