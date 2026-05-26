import React from 'react';

export interface LanCameraMovieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraMovieSolid: React.FC<LanCameraMovieSolidProps>;
export default LanCameraMovieSolid;
