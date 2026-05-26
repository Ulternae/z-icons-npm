import React from 'react';

export interface LanHousePersonArriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHousePersonArrive: React.FC<LanHousePersonArriveProps>;
export default LanHousePersonArrive;
