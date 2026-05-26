import React from 'react';

export interface LanBusAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusAlt: React.FC<LanBusAltProps>;
export default LanBusAlt;
