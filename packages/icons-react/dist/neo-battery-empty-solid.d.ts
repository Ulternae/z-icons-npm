import React from 'react';

export interface NeoBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryEmptySolid: React.FC<NeoBatteryEmptySolidProps>;
export default NeoBatteryEmptySolid;
