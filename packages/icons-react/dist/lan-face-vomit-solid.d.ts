import React from 'react';

export interface LanFaceVomitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceVomitSolid: React.FC<LanFaceVomitSolidProps>;
export default LanFaceVomitSolid;
