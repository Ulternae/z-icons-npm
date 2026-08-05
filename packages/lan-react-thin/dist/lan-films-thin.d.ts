import React from 'react';

export interface LanFilmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmsThin(props: LanFilmsThinProps): React.ReactElement;
export default LanFilmsThin;
