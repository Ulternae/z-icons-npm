import React from 'react';

export interface CoreFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilmSolid(props: CoreFilmSolidProps): React.ReactElement;
export default CoreFilmSolid;
