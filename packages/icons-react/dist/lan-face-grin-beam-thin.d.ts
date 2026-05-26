import React from 'react';

export interface LanFaceGrinBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinBeamThin: React.FC<LanFaceGrinBeamThinProps>;
export default LanFaceGrinBeamThin;
