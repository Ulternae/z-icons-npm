import React from 'react';

export interface NeoBatteryThreeQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryThreeQuarters: React.FC<NeoBatteryThreeQuartersProps>;
export default NeoBatteryThreeQuarters;
