import React from 'react';

export interface LanFaceHandPeekingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandPeekingRegular: React.FC<LanFaceHandPeekingRegularProps>;
export default LanFaceHandPeekingRegular;
