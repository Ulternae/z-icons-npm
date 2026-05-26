import React from 'react';

export interface LanFaceGrimaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrimaceSolid: React.FC<LanFaceGrimaceSolidProps>;
export default LanFaceGrimaceSolid;
