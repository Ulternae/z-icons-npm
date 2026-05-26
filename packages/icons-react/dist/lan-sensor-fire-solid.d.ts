import React from 'react';

export interface LanSensorFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorFireSolid: React.FC<LanSensorFireSolidProps>;
export default LanSensorFireSolid;
