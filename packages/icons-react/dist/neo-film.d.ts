import React from 'react';

export interface NeoFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilm: React.FC<NeoFilmProps>;
export default NeoFilm;
