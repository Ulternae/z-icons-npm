import React from 'react';

export interface LanObjectExcludeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectExcludeSolid: React.FC<LanObjectExcludeSolidProps>;
export default LanObjectExcludeSolid;
