import React from 'react';

export interface LanSensorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensor(props: LanSensorProps): React.ReactElement;
export default LanSensor;
