import React from 'react';

export interface LanSensorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorRegular(props: LanSensorRegularProps): React.ReactElement;
export default LanSensorRegular;
