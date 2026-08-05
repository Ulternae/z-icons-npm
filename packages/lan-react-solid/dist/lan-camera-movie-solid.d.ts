import React from 'react';

export interface LanCameraMovieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraMovieSolid(props: LanCameraMovieSolidProps): React.ReactElement;
export default LanCameraMovieSolid;
