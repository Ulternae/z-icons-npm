import React from 'react';

export interface LanPodcastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodcastSolid: React.FC<LanPodcastSolidProps>;
export default LanPodcastSolid;
