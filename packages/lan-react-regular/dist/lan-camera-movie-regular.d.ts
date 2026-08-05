import React from 'react';

export interface LanCameraMovieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraMovieRegular(props: LanCameraMovieRegularProps): React.ReactElement;
export default LanCameraMovieRegular;
