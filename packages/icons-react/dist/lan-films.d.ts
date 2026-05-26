import React from 'react';

export interface LanFilmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilms: React.FC<LanFilmsProps>;
export default LanFilms;
