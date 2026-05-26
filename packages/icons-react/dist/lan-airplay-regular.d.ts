import React from 'react';

export interface LanAirplayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplayRegular: React.FC<LanAirplayRegularProps>;
export default LanAirplayRegular;
