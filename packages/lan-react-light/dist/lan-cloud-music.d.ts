import React from 'react';

export interface LanCloudMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMusic(props: LanCloudMusicProps): React.ReactElement;
export default LanCloudMusic;
