import React from 'react';

export interface LanFilmAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmAltSolid: React.FC<LanFilmAltSolidProps>;
export default LanFilmAltSolid;
