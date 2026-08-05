import React from 'react';

export interface NeoFilmRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilmRegularDuo(props: NeoFilmRegularDuoProps): React.ReactElement;
export default NeoFilmRegularDuo;
