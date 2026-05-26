import React from 'react';

export interface LanCloudMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMusicThin: React.FC<LanCloudMusicThinProps>;
export default LanCloudMusicThin;
