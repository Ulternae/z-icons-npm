import React from 'react';

export interface MinaBatteryCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryCheckSolid: React.FC<MinaBatteryCheckSolidProps>;
export default MinaBatteryCheckSolid;
