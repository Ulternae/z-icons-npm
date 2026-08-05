import React from 'react';

export interface LanFilmCanisterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmCanisterSolid(props: LanFilmCanisterSolidProps): React.ReactElement;
export default LanFilmCanisterSolid;
