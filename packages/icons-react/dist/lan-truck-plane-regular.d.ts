import React from 'react';

export interface LanTruckPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlaneRegular: React.FC<LanTruckPlaneRegularProps>;
export default LanTruckPlaneRegular;
