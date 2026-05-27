import React from 'react';

export interface CoreFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilm: React.FC<CoreFilmProps>;
export default CoreFilm;
