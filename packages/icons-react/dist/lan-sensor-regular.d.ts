import React from 'react';

export interface LanSensorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorRegular: React.FC<LanSensorRegularProps>;
export default LanSensorRegular;
