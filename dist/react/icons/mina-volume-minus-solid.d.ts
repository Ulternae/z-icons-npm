import React from 'react';

export interface MinaVolumeMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeMinusSolid: React.FC<MinaVolumeMinusSolidProps>;
export default MinaVolumeMinusSolid;
