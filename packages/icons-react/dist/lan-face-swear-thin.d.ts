import React from 'react';

export interface LanFaceSwearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSwearThin: React.FC<LanFaceSwearThinProps>;
export default LanFaceSwearThin;
