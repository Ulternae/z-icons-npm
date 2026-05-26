import React from 'react';

export interface LanPersonLimbsWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonLimbsWideSolid: React.FC<LanPersonLimbsWideSolidProps>;
export default LanPersonLimbsWideSolid;
