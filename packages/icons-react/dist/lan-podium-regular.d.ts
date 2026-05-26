import React from 'react';

export interface LanPodiumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumRegular: React.FC<LanPodiumRegularProps>;
export default LanPodiumRegular;
