import React from 'react';

export interface LanFilmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilms(props: LanFilmsProps): React.ReactElement;
export default LanFilms;
