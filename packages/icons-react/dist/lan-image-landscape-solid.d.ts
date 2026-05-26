import React from 'react';

export interface LanImageLandscapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageLandscapeSolid: React.FC<LanImageLandscapeSolidProps>;
export default LanImageLandscapeSolid;
