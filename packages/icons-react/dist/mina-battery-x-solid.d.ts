import React from 'react';

export interface MinaBatteryXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryXSolid: React.FC<MinaBatteryXSolidProps>;
export default MinaBatteryXSolid;
