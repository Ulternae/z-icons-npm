import React from 'react';

export interface LanSensorFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorFireRegular: React.FC<LanSensorFireRegularProps>;
export default LanSensorFireRegular;
