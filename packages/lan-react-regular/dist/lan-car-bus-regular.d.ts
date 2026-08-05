import React from 'react';

export interface LanCarBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBusRegular(props: LanCarBusRegularProps): React.ReactElement;
export default LanCarBusRegular;
