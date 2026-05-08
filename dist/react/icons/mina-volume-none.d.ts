import React from 'react';

export interface MinaVolumeNoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeNone: React.FC<MinaVolumeNoneProps>;
export default MinaVolumeNone;
