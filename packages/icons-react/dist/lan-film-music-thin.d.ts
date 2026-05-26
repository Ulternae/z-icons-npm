import React from 'react';

export interface LanFilmMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmMusicThin: React.FC<LanFilmMusicThinProps>;
export default LanFilmMusicThin;
