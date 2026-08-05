import React from 'react';

export interface LanPodiumStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumStarRegular(props: LanPodiumStarRegularProps): React.ReactElement;
export default LanPodiumStarRegular;
