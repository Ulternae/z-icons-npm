import React from 'react';

export interface LanCloudMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMusicSolid(props: LanCloudMusicSolidProps): React.ReactElement;
export default LanCloudMusicSolid;
