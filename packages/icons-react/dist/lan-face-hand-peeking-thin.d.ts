import React from 'react';

export interface LanFaceHandPeekingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandPeekingThin: React.FC<LanFaceHandPeekingThinProps>;
export default LanFaceHandPeekingThin;
