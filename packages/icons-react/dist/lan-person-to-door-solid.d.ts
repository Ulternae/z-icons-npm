import React from 'react';

export interface LanPersonToDoorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToDoorSolid: React.FC<LanPersonToDoorSolidProps>;
export default LanPersonToDoorSolid;
