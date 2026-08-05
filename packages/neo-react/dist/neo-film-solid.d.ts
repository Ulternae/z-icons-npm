import React from 'react';

export interface NeoFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilmSolid(props: NeoFilmSolidProps): React.ReactElement;
export default NeoFilmSolid;
