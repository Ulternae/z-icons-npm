import React from 'react';

export interface LanPhotoFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilmSolid: React.FC<LanPhotoFilmSolidProps>;
export default LanPhotoFilmSolid;
