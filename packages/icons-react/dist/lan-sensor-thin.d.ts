import React from 'react';

export interface LanSensorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorThin: React.FC<LanSensorThinProps>;
export default LanSensorThin;
