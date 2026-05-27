import React from 'react';

export interface CoreFilmRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilmRegularDuo: React.FC<CoreFilmRegularDuoProps>;
export default CoreFilmRegularDuo;
