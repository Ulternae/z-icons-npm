import React from 'react';

export interface LanPeopleLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleLineRegular: React.FC<LanPeopleLineRegularProps>;
export default LanPeopleLineRegular;
