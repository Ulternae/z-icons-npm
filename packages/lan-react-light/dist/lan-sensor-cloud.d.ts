import React from 'react';

export interface LanSensorCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorCloud(props: LanSensorCloudProps): React.ReactElement;
export default LanSensorCloud;
