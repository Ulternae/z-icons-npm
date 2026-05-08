import React from 'react';

export interface MinaDotsVerticalWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalWavesSolid: React.FC<MinaDotsVerticalWavesSolidProps>;
export default MinaDotsVerticalWavesSolid;
