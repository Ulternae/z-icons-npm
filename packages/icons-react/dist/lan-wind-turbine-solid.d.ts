import React from 'react';

export interface LanWindTurbineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindTurbineSolid: React.FC<LanWindTurbineSolidProps>;
export default LanWindTurbineSolid;
