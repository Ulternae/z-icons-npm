import React from 'react';

export interface CoreMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMusic(props: CoreMusicProps): React.ReactElement;
export default CoreMusic;
