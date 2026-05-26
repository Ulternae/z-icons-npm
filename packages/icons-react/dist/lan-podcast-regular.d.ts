import React from 'react';

export interface LanPodcastRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodcastRegular: React.FC<LanPodcastRegularProps>;
export default LanPodcastRegular;
