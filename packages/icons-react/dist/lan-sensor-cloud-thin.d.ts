import React from 'react';

export interface LanSensorCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorCloudThin: React.FC<LanSensorCloudThinProps>;
export default LanSensorCloudThin;
