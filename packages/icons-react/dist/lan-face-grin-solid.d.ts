import React from 'react';

export interface LanFaceGrinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinSolid: React.FC<LanFaceGrinSolidProps>;
export default LanFaceGrinSolid;
