import React from 'react';

export interface LanTvMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvMusicThin: React.FC<LanTvMusicThinProps>;
export default LanTvMusicThin;
