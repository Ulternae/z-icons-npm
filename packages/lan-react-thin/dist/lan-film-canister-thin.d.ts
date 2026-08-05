import React from 'react';

export interface LanFilmCanisterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmCanisterThin(props: LanFilmCanisterThinProps): React.ReactElement;
export default LanFilmCanisterThin;
