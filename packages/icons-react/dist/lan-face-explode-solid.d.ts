import React from 'react';

export interface LanFaceExplodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExplodeSolid: React.FC<LanFaceExplodeSolidProps>;
export default LanFaceExplodeSolid;
