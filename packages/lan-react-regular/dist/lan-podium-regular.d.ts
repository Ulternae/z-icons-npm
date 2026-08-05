import React from 'react';

export interface LanPodiumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPodiumRegular(props: LanPodiumRegularProps): React.ReactElement;
export default LanPodiumRegular;
