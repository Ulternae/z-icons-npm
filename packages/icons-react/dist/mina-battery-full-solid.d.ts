import React from 'react';

export interface MinaBatteryFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryFullSolid: React.FC<MinaBatteryFullSolidProps>;
export default MinaBatteryFullSolid;
