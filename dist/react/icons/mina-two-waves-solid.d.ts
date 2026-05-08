import React from 'react';

export interface MinaTwoWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoWavesSolid: React.FC<MinaTwoWavesSolidProps>;
export default MinaTwoWavesSolid;
