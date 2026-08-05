import React from 'react';

export interface LanPhotoFilmMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhotoFilmMusic(props: LanPhotoFilmMusicProps): React.ReactElement;
export default LanPhotoFilmMusic;
