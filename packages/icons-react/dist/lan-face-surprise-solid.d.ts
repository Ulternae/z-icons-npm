import React from 'react';

export interface LanFaceSurpriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSurpriseSolid: React.FC<LanFaceSurpriseSolidProps>;
export default LanFaceSurpriseSolid;
