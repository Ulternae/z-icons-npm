import React from 'react';

export interface MinaCheckWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckWavesSolid: React.FC<MinaCheckWavesSolidProps>;
export default MinaCheckWavesSolid;
