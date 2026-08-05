import React from 'react';

export interface MinaFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilm(props: MinaFilmProps): React.ReactElement;
export default MinaFilm;
