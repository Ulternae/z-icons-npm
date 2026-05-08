import React from 'react';

export interface MinaFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilmSolid: React.FC<MinaFilmSolidProps>;
export default MinaFilmSolid;
