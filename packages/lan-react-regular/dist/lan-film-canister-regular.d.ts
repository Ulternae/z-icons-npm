import React from 'react';

export interface LanFilmCanisterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmCanisterRegular(props: LanFilmCanisterRegularProps): React.ReactElement;
export default LanFilmCanisterRegular;
