import React from 'react';

export interface LanPhotoFilmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhotoFilmThin(props: LanPhotoFilmThinProps): React.ReactElement;
export default LanPhotoFilmThin;
