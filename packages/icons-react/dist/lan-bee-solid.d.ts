import React from 'react';

export interface LanBeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeeSolid: React.FC<LanBeeSolidProps>;
export default LanBeeSolid;
