import React from 'react';

export interface LanPodiumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumThin(props: LanPodiumThinProps): React.ReactElement;
export default LanPodiumThin;
