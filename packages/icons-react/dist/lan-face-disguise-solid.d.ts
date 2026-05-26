import React from 'react';

export interface LanFaceDisguiseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisguiseSolid: React.FC<LanFaceDisguiseSolidProps>;
export default LanFaceDisguiseSolid;
