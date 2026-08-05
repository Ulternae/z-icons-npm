import React from 'react';

export interface LanSensorCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorCloudSolid(props: LanSensorCloudSolidProps): React.ReactElement;
export default LanSensorCloudSolid;
