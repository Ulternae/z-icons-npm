import React from 'react';

export interface LanCloudMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMusicSolid: React.FC<LanCloudMusicSolidProps>;
export default LanCloudMusicSolid;
