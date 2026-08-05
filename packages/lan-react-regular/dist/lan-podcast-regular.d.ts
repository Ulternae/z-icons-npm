import React from 'react';

export interface LanPodcastRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodcastRegular(props: LanPodcastRegularProps): React.ReactElement;
export default LanPodcastRegular;
