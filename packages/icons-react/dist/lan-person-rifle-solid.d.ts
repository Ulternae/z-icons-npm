import React from 'react';

export interface LanPersonRifleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRifleSolid: React.FC<LanPersonRifleSolidProps>;
export default LanPersonRifleSolid;
