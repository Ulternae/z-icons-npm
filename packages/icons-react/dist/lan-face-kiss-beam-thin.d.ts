import React from 'react';

export interface LanFaceKissBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissBeamThin: React.FC<LanFaceKissBeamThinProps>;
export default LanFaceKissBeamThin;
