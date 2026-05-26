import React from 'react';

export interface LanFaceWorriedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWorriedSolid: React.FC<LanFaceWorriedSolidProps>;
export default LanFaceWorriedSolid;
