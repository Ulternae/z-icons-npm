import React from 'react';

export interface LanTelescopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTelescopeSolid: React.FC<LanTelescopeSolidProps>;
export default LanTelescopeSolid;
