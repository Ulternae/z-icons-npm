import React from 'react';

export interface LanFaceConfoundedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfoundedSolid: React.FC<LanFaceConfoundedSolidProps>;
export default LanFaceConfoundedSolid;
