import React from 'react';

export interface LanTruckPlowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlowRegular: React.FC<LanTruckPlowRegularProps>;
export default LanTruckPlowRegular;
