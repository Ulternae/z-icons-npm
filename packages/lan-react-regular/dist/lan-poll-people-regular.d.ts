import React from 'react';

export interface LanPollPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPollPeopleRegular(props: LanPollPeopleRegularProps): React.ReactElement;
export default LanPollPeopleRegular;
