import React from 'react';

export interface LanSensorCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorCloudThin(props: LanSensorCloudThinProps): React.ReactElement;
export default LanSensorCloudThin;
