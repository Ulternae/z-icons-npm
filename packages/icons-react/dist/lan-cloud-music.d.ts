import React from 'react';

export interface LanCloudMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMusic: React.FC<LanCloudMusicProps>;
export default LanCloudMusic;
