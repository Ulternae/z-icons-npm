import React from 'react';

export interface LanSensorCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorCloudSolid: React.FC<LanSensorCloudSolidProps>;
export default LanSensorCloudSolid;
