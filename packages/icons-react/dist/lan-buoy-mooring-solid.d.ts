import React from 'react';

export interface LanBuoyMooringSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyMooringSolid: React.FC<LanBuoyMooringSolidProps>;
export default LanBuoyMooringSolid;
