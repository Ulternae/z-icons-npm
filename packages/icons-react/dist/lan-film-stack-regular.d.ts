import React from 'react';

export interface LanFilmStackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmStackRegular: React.FC<LanFilmStackRegularProps>;
export default LanFilmStackRegular;
