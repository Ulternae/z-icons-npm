import React from 'react';

export interface LanPhotoFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhotoFilm(props: LanPhotoFilmProps): React.ReactElement;
export default LanPhotoFilm;
