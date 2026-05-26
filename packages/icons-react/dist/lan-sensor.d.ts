import React from 'react';

export interface LanSensorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensor: React.FC<LanSensorProps>;
export default LanSensor;
