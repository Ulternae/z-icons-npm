import React from 'react';

export interface LanFilmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmsSolid(props: LanFilmsSolidProps): React.ReactElement;
export default LanFilmsSolid;
