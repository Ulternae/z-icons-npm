import React from 'react';

export interface LanFaceHandPeekingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandPeekingSolid: React.FC<LanFaceHandPeekingSolidProps>;
export default LanFaceHandPeekingSolid;
