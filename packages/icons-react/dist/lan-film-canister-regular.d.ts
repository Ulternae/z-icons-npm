import React from 'react';

export interface LanFilmCanisterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmCanisterRegular: React.FC<LanFilmCanisterRegularProps>;
export default LanFilmCanisterRegular;
