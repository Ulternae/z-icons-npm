import React from 'react';

export interface LanFaceSmileBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileBeamThin: React.FC<LanFaceSmileBeamThinProps>;
export default LanFaceSmileBeamThin;
