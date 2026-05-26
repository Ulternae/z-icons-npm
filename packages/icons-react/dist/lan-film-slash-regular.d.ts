import React from 'react';

export interface LanFilmSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmSlashRegular: React.FC<LanFilmSlashRegularProps>;
export default LanFilmSlashRegular;
