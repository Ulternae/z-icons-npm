import React from 'react';

export interface NeoFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilmSolid: React.FC<NeoFilmSolidProps>;
export default NeoFilmSolid;
