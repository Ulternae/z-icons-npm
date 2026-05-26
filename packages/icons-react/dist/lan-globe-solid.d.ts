import React from 'react';

export interface LanGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeSolid: React.FC<LanGlobeSolidProps>;
export default LanGlobeSolid;
