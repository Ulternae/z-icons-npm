import React from 'react';

export interface CoreFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilmSolid: React.FC<CoreFilmSolidProps>;
export default CoreFilmSolid;
