import React from 'react';

export interface LanFaceGrinStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinStars: React.FC<LanFaceGrinStarsProps>;
export default LanFaceGrinStars;
