import React from 'react';

export interface LanBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusRegular(props: LanBusRegularProps): React.ReactElement;
export default LanBusRegular;
