import React from 'react';

export interface LanPersonRaysSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRaysSolid: React.FC<LanPersonRaysSolidProps>;
export default LanPersonRaysSolid;
