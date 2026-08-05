import React from 'react';

export interface NeoFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilm(props: NeoFilmProps): React.ReactElement;
export default NeoFilm;
