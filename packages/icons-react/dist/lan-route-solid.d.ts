import React from 'react';

export interface LanRouteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteSolid: React.FC<LanRouteSolidProps>;
export default LanRouteSolid;
