import React from 'react';

export interface MinaXWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXWavesSolid: React.FC<MinaXWavesSolidProps>;
export default MinaXWavesSolid;
