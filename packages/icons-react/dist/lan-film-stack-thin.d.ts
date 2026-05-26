import React from 'react';

export interface LanFilmStackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmStackThin: React.FC<LanFilmStackThinProps>;
export default LanFilmStackThin;
