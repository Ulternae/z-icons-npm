import React from 'react';

export interface LanBicycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicycle: React.FC<LanBicycleProps>;
export default LanBicycle;
