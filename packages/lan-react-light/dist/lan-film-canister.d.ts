import React from 'react';

export interface LanFilmCanisterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmCanister(props: LanFilmCanisterProps): React.ReactElement;
export default LanFilmCanister;
