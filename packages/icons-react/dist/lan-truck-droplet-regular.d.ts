import React from 'react';

export interface LanTruckDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckDropletRegular: React.FC<LanTruckDropletRegularProps>;
export default LanTruckDropletRegular;
