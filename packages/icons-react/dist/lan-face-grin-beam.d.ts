import React from 'react';

export interface LanFaceGrinBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinBeam: React.FC<LanFaceGrinBeamProps>;
export default LanFaceGrinBeam;
