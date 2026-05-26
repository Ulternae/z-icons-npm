import React from 'react';

export interface LanPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleRegular: React.FC<LanPeopleRegularProps>;
export default LanPeopleRegular;
