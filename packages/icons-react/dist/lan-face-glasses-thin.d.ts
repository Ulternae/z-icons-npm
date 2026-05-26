import React from 'react';

export interface LanFaceGlassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGlassesThin: React.FC<LanFaceGlassesThinProps>;
export default LanFaceGlassesThin;
