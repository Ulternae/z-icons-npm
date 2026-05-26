import React from 'react';

export interface LanCircleHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHouse: React.FC<LanCircleHouseProps>;
export default LanCircleHouse;
