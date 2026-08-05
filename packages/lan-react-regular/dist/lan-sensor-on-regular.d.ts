import React from 'react';

export interface LanSensorOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorOnRegular(props: LanSensorOnRegularProps): React.ReactElement;
export default LanSensorOnRegular;
