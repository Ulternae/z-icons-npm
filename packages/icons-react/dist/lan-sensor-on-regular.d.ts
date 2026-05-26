import React from 'react';

export interface LanSensorOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorOnRegular: React.FC<LanSensorOnRegularProps>;
export default LanSensorOnRegular;
