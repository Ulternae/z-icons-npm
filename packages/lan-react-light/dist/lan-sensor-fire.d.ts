import React from 'react';

export interface LanSensorFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorFire(props: LanSensorFireProps): React.ReactElement;
export default LanSensorFire;
