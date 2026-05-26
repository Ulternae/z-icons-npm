import React from 'react';

export interface LanFaceGrinStarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinStarsThin: React.FC<LanFaceGrinStarsThinProps>;
export default LanFaceGrinStarsThin;
