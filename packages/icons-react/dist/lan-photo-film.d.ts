import React from 'react';

export interface LanPhotoFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilm: React.FC<LanPhotoFilmProps>;
export default LanPhotoFilm;
