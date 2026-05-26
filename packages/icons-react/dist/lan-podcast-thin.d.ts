import React from 'react';

export interface LanPodcastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodcastThin: React.FC<LanPodcastThinProps>;
export default LanPodcastThin;
