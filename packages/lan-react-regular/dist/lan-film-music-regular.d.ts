import React from 'react';

export interface LanFilmMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmMusicRegular(props: LanFilmMusicRegularProps): React.ReactElement;
export default LanFilmMusicRegular;
