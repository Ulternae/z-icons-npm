import React from 'react';

export interface MinaVolumeHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeHigh: React.FC<MinaVolumeHighProps>;
export default MinaVolumeHigh;
