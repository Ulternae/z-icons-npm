import React from 'react';

export interface NeoBatteryLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryLow: React.FC<NeoBatteryLowProps>;
export default NeoBatteryLow;
