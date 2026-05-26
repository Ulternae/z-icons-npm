import React from 'react';

export interface LanPersonWalkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalkingSolid: React.FC<LanPersonWalkingSolidProps>;
export default LanPersonWalkingSolid;
