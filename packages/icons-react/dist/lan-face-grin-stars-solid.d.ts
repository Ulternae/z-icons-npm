import React from 'react';

export interface LanFaceGrinStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinStarsSolid: React.FC<LanFaceGrinStarsSolidProps>;
export default LanFaceGrinStarsSolid;
