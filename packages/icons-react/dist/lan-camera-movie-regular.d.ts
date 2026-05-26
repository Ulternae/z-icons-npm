import React from 'react';

export interface LanCameraMovieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraMovieRegular: React.FC<LanCameraMovieRegularProps>;
export default LanCameraMovieRegular;
