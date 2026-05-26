import React from 'react';

export interface LanFaceSmileBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileBeamSolid: React.FC<LanFaceSmileBeamSolidProps>;
export default LanFaceSmileBeamSolid;
