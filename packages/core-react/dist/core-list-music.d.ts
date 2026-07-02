import React from 'react';

export interface CoreListMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListMusic(props: CoreListMusicProps): React.ReactElement;
export default CoreListMusic;
