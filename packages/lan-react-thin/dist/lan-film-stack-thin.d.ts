import React from 'react';

export interface LanFilmStackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmStackThin(props: LanFilmStackThinProps): React.ReactElement;
export default LanFilmStackThin;
