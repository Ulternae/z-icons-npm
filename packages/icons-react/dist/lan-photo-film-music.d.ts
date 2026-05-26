import React from 'react';

export interface LanPhotoFilmMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilmMusic: React.FC<LanPhotoFilmMusicProps>;
export default LanPhotoFilmMusic;
