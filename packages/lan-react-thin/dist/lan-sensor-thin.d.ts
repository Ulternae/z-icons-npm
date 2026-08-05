import React from 'react';

export interface LanSensorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorThin(props: LanSensorThinProps): React.ReactElement;
export default LanSensorThin;
