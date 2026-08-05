import React from 'react';

export interface LanFilmSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmSlash(props: LanFilmSlashProps): React.ReactElement;
export default LanFilmSlash;
