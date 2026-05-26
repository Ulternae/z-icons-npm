import React from 'react';

export interface LanPhotoFilmMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilmMusicThin: React.FC<LanPhotoFilmMusicThinProps>;
export default LanPhotoFilmMusicThin;
