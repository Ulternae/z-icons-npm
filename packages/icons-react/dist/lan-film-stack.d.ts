import React from 'react';

export interface LanFilmStackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmStack: React.FC<LanFilmStackProps>;
export default LanFilmStack;
