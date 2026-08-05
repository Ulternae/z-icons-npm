import React from 'react';

export interface LanPodiumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumSolid(props: LanPodiumSolidProps): React.ReactElement;
export default LanPodiumSolid;
