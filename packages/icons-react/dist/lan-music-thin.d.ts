import React from 'react';

export interface LanMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicThin: React.FC<LanMusicThinProps>;
export default LanMusicThin;
