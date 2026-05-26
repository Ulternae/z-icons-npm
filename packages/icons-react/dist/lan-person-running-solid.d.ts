import React from 'react';

export interface LanPersonRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRunningSolid: React.FC<LanPersonRunningSolidProps>;
export default LanPersonRunningSolid;
