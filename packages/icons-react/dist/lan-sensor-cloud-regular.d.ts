import React from 'react';

export interface LanSensorCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorCloudRegular: React.FC<LanSensorCloudRegularProps>;
export default LanSensorCloudRegular;
