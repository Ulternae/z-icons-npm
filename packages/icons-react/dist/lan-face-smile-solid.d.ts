import React from 'react';

export interface LanFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileSolid: React.FC<LanFaceSmileSolidProps>;
export default LanFaceSmileSolid;
