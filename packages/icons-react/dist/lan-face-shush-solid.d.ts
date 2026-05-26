import React from 'react';

export interface LanFaceShushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShushSolid: React.FC<LanFaceShushSolidProps>;
export default LanFaceShushSolid;
