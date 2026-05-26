import React from 'react';

export interface LanFilmAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmAltThin: React.FC<LanFilmAltThinProps>;
export default LanFilmAltThin;
