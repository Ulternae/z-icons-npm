import React from 'react';

export interface LanFaceHandPeekingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandPeeking: React.FC<LanFaceHandPeekingProps>;
export default LanFaceHandPeeking;
