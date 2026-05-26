import React from 'react';

export interface LanImageMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageMusicThin: React.FC<LanImageMusicThinProps>;
export default LanImageMusicThin;
