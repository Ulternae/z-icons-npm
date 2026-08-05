import React from 'react';

export interface LanPodiumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodium(props: LanPodiumProps): React.ReactElement;
export default LanPodium;
