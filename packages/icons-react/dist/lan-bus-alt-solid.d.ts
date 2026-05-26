import React from 'react';

export interface LanBusAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusAltSolid: React.FC<LanBusAltSolidProps>;
export default LanBusAltSolid;
