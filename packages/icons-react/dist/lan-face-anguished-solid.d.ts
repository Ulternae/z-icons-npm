import React from 'react';

export interface LanFaceAnguishedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAnguishedSolid: React.FC<LanFaceAnguishedSolidProps>;
export default LanFaceAnguishedSolid;
