import React from 'react';

export interface LanBusAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusAltThin: React.FC<LanBusAltThinProps>;
export default LanBusAltThin;
