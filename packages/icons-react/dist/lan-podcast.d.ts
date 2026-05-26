import React from 'react';

export interface LanPodcastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodcast: React.FC<LanPodcastProps>;
export default LanPodcast;
