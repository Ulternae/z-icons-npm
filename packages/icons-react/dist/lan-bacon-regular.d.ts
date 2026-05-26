import React from 'react';

export interface LanBaconRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaconRegular: React.FC<LanBaconRegularProps>;
export default LanBaconRegular;
