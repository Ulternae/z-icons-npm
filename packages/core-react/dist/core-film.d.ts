import React from 'react';

export interface CoreFilmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilm(props: CoreFilmProps): React.ReactElement;
export default CoreFilm;
