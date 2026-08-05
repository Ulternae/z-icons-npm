import React from 'react';

export interface LanPodcastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodcastThin(props: LanPodcastThinProps): React.ReactElement;
export default LanPodcastThin;
