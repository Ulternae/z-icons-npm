import React from 'react';

export interface LanFilmCanisterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmCanisterThin: React.FC<LanFilmCanisterThinProps>;
export default LanFilmCanisterThin;
