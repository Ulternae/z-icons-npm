import React from 'react';

export interface LanRectangleLandscapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleLandscapeSolid: React.FC<LanRectangleLandscapeSolidProps>;
export default LanRectangleLandscapeSolid;
