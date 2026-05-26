import React from 'react';

export interface LanTruckBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckBoltRegular: React.FC<LanTruckBoltRegularProps>;
export default LanTruckBoltRegular;
