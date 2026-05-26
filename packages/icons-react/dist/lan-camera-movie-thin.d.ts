import React from 'react';

export interface LanCameraMovieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraMovieThin: React.FC<LanCameraMovieThinProps>;
export default LanCameraMovieThin;
