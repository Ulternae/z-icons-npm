import React from 'react';

export interface LanCameraMovieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraMovie(props: LanCameraMovieProps): React.ReactElement;
export default LanCameraMovie;
