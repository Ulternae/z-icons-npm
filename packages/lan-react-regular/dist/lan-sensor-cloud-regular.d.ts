import React from 'react';

export interface LanSensorCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorCloudRegular(props: LanSensorCloudRegularProps): React.ReactElement;
export default LanSensorCloudRegular;
