import React from 'react';

export interface MinaVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeLow: React.FC<MinaVolumeLowProps>;
export default MinaVolumeLow;
