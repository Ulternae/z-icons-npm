import React from 'react';

export interface LanListMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListMusicThin: React.FC<LanListMusicThinProps>;
export default LanListMusicThin;
