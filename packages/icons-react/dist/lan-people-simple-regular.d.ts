import React from 'react';

export interface LanPeopleSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleSimpleRegular: React.FC<LanPeopleSimpleRegularProps>;
export default LanPeopleSimpleRegular;
