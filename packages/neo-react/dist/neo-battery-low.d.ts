import React from 'react';

export interface NeoBatteryLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryLow(props: NeoBatteryLowProps): React.ReactElement;
export default NeoBatteryLow;
