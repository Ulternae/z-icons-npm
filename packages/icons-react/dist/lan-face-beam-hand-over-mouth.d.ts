import React from 'react';

export interface LanFaceBeamHandOverMouthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceBeamHandOverMouth: React.FC<LanFaceBeamHandOverMouthProps>;
export default LanFaceBeamHandOverMouth;
