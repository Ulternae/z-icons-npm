import React from 'react';

export interface NeoBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryEmpty: React.FC<NeoBatteryEmptyProps>;
export default NeoBatteryEmpty;
