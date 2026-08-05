import React from 'react';

export interface LanPodiumStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumStarThin(props: LanPodiumStarThinProps): React.ReactElement;
export default LanPodiumStarThin;
