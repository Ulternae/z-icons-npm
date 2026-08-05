import React from 'react';

export interface LanSensorOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorOn(props: LanSensorOnProps): React.ReactElement;
export default LanSensorOn;
