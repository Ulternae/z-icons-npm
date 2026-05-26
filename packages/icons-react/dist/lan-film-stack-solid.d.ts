import React from 'react';

export interface LanFilmStackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmStackSolid: React.FC<LanFilmStackSolidProps>;
export default LanFilmStackSolid;
