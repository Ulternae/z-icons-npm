import React from 'react';

export interface LanFaceSwearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSwearSolid: React.FC<LanFaceSwearSolidProps>;
export default LanFaceSwearSolid;
