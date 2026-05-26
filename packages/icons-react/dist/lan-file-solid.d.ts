import React from 'react';

export interface LanFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSolid: React.FC<LanFileSolidProps>;
export default LanFileSolid;
