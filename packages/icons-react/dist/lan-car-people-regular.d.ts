import React from 'react';

export interface LanCarPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarPeopleRegular: React.FC<LanCarPeopleRegularProps>;
export default LanCarPeopleRegular;
