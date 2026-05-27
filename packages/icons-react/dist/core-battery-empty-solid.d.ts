import React from 'react';

export interface CoreBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryEmptySolid: React.FC<CoreBatteryEmptySolidProps>;
export default CoreBatteryEmptySolid;
