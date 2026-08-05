import React from 'react';

export interface NeoMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMusic(props: NeoMusicProps): React.ReactElement;
export default NeoMusic;
