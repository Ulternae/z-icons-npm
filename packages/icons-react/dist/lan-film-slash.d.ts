import React from 'react';

export interface LanFilmSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmSlash: React.FC<LanFilmSlashProps>;
export default LanFilmSlash;
