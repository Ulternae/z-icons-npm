import React from 'react';

export interface LanPhotoFilmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhotoFilmRegular(props: LanPhotoFilmRegularProps): React.ReactElement;
export default LanPhotoFilmRegular;
