import React from 'react';

export interface LanPodcastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodcastSolid(props: LanPodcastSolidProps): React.ReactElement;
export default LanPodcastSolid;
