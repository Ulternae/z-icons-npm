import React from 'react';

export interface MinaVolumeHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeHighSolid: React.FC<MinaVolumeHighSolidProps>;
export default MinaVolumeHighSolid;
