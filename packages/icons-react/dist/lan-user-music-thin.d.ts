import React from 'react';

export interface LanUserMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMusicThin: React.FC<LanUserMusicThinProps>;
export default LanUserMusicThin;
