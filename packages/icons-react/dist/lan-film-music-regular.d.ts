import React from 'react';

export interface LanFilmMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmMusicRegular: React.FC<LanFilmMusicRegularProps>;
export default LanFilmMusicRegular;
