import React from 'react';

export interface MinaVolumeXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeX: React.FC<MinaVolumeXProps>;
export default MinaVolumeX;
