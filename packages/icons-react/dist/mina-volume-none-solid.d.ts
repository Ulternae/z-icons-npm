import React from 'react';

export interface MinaVolumeNoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeNoneSolid: React.FC<MinaVolumeNoneSolidProps>;
export default MinaVolumeNoneSolid;
