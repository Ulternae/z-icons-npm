import React from 'react';

export interface LanFilmCanisterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmCanister: React.FC<LanFilmCanisterProps>;
export default LanFilmCanister;
