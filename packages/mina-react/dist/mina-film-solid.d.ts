import React from 'react';

export interface MinaFilmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilmSolid(props: MinaFilmSolidProps): React.ReactElement;
export default MinaFilmSolid;
