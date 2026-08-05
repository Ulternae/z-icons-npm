import React from 'react';

export interface LanFilmAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmAltThin(props: LanFilmAltThinProps): React.ReactElement;
export default LanFilmAltThin;
