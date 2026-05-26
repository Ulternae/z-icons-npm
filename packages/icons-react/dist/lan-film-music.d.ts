import React from 'react';

export interface LanFilmMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmMusic: React.FC<LanFilmMusicProps>;
export default LanFilmMusic;
