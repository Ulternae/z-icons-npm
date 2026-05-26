import React from 'react';

export interface LanFaceSmileTearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileTearThin: React.FC<LanFaceSmileTearThinProps>;
export default LanFaceSmileTearThin;
