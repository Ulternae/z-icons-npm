import React from 'react';

export interface LanPodcastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodcast(props: LanPodcastProps): React.ReactElement;
export default LanPodcast;
