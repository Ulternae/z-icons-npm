import React from 'react';

export interface LanFaceGrinBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinBeamSolid: React.FC<LanFaceGrinBeamSolidProps>;
export default LanFaceGrinBeamSolid;
