import React from 'react';

export interface MinaBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryEmptySolid: React.FC<MinaBatteryEmptySolidProps>;
export default MinaBatteryEmptySolid;
