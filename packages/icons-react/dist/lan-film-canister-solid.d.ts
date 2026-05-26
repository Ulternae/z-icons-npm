import React from 'react';

export interface LanFilmCanisterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmCanisterSolid: React.FC<LanFilmCanisterSolidProps>;
export default LanFilmCanisterSolid;
