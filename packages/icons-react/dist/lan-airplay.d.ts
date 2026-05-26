import React from 'react';

export interface LanAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplay: React.FC<LanAirplayProps>;
export default LanAirplay;
