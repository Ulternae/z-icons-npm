import React from 'react';

export interface LanPhotoFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhotoFilmSolid(props: LanPhotoFilmSolidProps): React.ReactElement;
export default LanPhotoFilmSolid;
