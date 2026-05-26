import React from 'react';

export interface LanFacePensiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePensiveSolid: React.FC<LanFacePensiveSolidProps>;
export default LanFacePensiveSolid;
