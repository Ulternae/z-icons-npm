import React from 'react';

export interface LanPodiumStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumStar(props: LanPodiumStarProps): React.ReactElement;
export default LanPodiumStar;
