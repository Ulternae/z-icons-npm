import React from 'react';

export interface LanSensorOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorOn: React.FC<LanSensorOnProps>;
export default LanSensorOn;
