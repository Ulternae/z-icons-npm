import React from 'react';

export interface LanSensorCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorCloud: React.FC<LanSensorCloudProps>;
export default LanSensorCloud;
