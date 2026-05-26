import React from 'react';

export interface LanFilmSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmSlashThin: React.FC<LanFilmSlashThinProps>;
export default LanFilmSlashThin;
