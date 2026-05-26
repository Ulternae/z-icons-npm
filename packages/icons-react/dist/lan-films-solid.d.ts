import React from 'react';

export interface LanFilmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmsSolid: React.FC<LanFilmsSolidProps>;
export default LanFilmsSolid;
