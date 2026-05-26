import React from 'react';

export interface LanFilmAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmAltRegular: React.FC<LanFilmAltRegularProps>;
export default LanFilmAltRegular;
