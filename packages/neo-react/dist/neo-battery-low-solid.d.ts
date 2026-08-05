import React from 'react';

export interface NeoBatteryLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryLowSolid(props: NeoBatteryLowSolidProps): React.ReactElement;
export default NeoBatteryLowSolid;
