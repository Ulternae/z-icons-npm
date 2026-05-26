import React from 'react';

export interface LanFaceScreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceScreamSolid: React.FC<LanFaceScreamSolidProps>;
export default LanFaceScreamSolid;
