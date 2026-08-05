import React from 'react';

export interface LanFilmStackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmStack(props: LanFilmStackProps): React.ReactElement;
export default LanFilmStack;
