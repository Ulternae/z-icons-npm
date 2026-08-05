import React from 'react';

export interface LanSensorFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorFireThin(props: LanSensorFireThinProps): React.ReactElement;
export default LanSensorFireThin;
