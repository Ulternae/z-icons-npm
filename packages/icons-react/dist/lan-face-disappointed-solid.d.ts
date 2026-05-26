import React from 'react';

export interface LanFaceDisappointedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisappointedSolid: React.FC<LanFaceDisappointedSolidProps>;
export default LanFaceDisappointedSolid;
