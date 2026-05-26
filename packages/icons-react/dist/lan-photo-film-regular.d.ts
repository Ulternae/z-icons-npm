import React from 'react';

export interface LanPhotoFilmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhotoFilmRegular: React.FC<LanPhotoFilmRegularProps>;
export default LanPhotoFilmRegular;
