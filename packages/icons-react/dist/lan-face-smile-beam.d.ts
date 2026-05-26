import React from 'react';

export interface LanFaceSmileBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileBeam: React.FC<LanFaceSmileBeamProps>;
export default LanFaceSmileBeam;
