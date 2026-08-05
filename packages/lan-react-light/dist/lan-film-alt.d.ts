import React from 'react';

export interface LanFilmAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmAlt(props: LanFilmAltProps): React.ReactElement;
export default LanFilmAlt;
