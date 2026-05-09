import React from 'react';

export interface MinaVolumeMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeMinus: React.FC<MinaVolumeMinusProps>;
export default MinaVolumeMinus;
