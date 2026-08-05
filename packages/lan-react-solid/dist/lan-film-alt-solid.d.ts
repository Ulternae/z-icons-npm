import React from 'react';

export interface LanFilmAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmAltSolid(props: LanFilmAltSolidProps): React.ReactElement;
export default LanFilmAltSolid;
