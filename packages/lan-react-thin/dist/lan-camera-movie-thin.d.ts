import React from 'react';

export interface LanCameraMovieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraMovieThin(props: LanCameraMovieThinProps): React.ReactElement;
export default LanCameraMovieThin;
