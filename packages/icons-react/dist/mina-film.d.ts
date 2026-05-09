import React from 'react';

export interface MinaFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilm: React.FC<MinaFilmProps>;
export default MinaFilm;
