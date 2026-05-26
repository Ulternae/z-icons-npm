import React from 'react';

export interface LanMaskFaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskFaceSolid: React.FC<LanMaskFaceSolidProps>;
export default LanMaskFaceSolid;
