import React from 'react';

export interface LanForkKnifeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkKnifeSolid: React.FC<LanForkKnifeSolidProps>;
export default LanForkKnifeSolid;
