import React from 'react';

export interface LanBowlShavedIceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlShavedIceSolid: React.FC<LanBowlShavedIceSolidProps>;
export default LanBowlShavedIceSolid;
