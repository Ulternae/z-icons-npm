import React from 'react';

export interface LanTvMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvMusic(props: LanTvMusicProps): React.ReactElement;
export default LanTvMusic;
