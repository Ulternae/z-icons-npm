import React from 'react';

export interface LanCloudMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMusicRegular: React.FC<LanCloudMusicRegularProps>;
export default LanCloudMusicRegular;
