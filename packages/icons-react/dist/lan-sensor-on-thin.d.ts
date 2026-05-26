import React from 'react';

export interface LanSensorOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorOnThin: React.FC<LanSensorOnThinProps>;
export default LanSensorOnThin;
