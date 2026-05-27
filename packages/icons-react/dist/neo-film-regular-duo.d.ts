import React from 'react';

export interface NeoFilmRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilmRegularDuo: React.FC<NeoFilmRegularDuoProps>;
export default NeoFilmRegularDuo;
