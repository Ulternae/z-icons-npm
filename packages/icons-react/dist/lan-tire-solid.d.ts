import React from 'react';

export interface LanTireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireSolid: React.FC<LanTireSolidProps>;
export default LanTireSolid;
