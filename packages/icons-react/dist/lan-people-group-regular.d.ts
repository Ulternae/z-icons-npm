import React from 'react';

export interface LanPeopleGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleGroupRegular: React.FC<LanPeopleGroupRegularProps>;
export default LanPeopleGroupRegular;
