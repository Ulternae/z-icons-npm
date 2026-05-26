import React from 'react';

export interface LanTruckFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFireRegular: React.FC<LanTruckFireRegularProps>;
export default LanTruckFireRegular;
