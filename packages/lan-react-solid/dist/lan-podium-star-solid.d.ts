import React from 'react';

export interface LanPodiumStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumStarSolid(props: LanPodiumStarSolidProps): React.ReactElement;
export default LanPodiumStarSolid;
