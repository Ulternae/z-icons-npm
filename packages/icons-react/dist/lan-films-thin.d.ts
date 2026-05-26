import React from 'react';

export interface LanFilmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmsThin: React.FC<LanFilmsThinProps>;
export default LanFilmsThin;
