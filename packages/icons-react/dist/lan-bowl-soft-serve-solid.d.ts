import React from 'react';

export interface LanBowlSoftServeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSoftServeSolid: React.FC<LanBowlSoftServeSolidProps>;
export default LanBowlSoftServeSolid;
