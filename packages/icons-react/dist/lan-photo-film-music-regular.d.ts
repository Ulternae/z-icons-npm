import React from 'react';

export interface LanPhotoFilmMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilmMusicRegular: React.FC<LanPhotoFilmMusicRegularProps>;
export default LanPhotoFilmMusicRegular;
