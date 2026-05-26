import React from 'react';

export interface LanSensorFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorFire: React.FC<LanSensorFireProps>;
export default LanSensorFire;
