import React from 'react';

export interface LanFilmAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmAlt: React.FC<LanFilmAltProps>;
export default LanFilmAlt;
