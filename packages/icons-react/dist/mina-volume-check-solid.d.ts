import React from 'react';

export interface MinaVolumeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeCheckSolid: React.FC<MinaVolumeCheckSolidProps>;
export default MinaVolumeCheckSolid;
