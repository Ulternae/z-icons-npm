import React from 'react';

export interface LanPeopleCarryBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleCarryBoxRegular: React.FC<LanPeopleCarryBoxRegularProps>;
export default LanPeopleCarryBoxRegular;
