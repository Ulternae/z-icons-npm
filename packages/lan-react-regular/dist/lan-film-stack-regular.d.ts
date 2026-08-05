import React from 'react';

export interface LanFilmStackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmStackRegular(props: LanFilmStackRegularProps): React.ReactElement;
export default LanFilmStackRegular;
