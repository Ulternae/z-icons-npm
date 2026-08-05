import React from 'react';

export interface LanFilmMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmMusic(props: LanFilmMusicProps): React.ReactElement;
export default LanFilmMusic;
