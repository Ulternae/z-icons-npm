import React from 'react';

export interface LanFilmStackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmStackSolid(props: LanFilmStackSolidProps): React.ReactElement;
export default LanFilmStackSolid;
