import React from 'react';

export interface LanCloudMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMusicThin(props: LanCloudMusicThinProps): React.ReactElement;
export default LanCloudMusicThin;
