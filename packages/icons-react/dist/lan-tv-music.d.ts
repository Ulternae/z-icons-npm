import React from 'react';

export interface LanTvMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvMusic: React.FC<LanTvMusicProps>;
export default LanTvMusic;
