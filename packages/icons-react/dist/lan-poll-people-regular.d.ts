import React from 'react';

export interface LanPollPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPollPeopleRegular: React.FC<LanPollPeopleRegularProps>;
export default LanPollPeopleRegular;
