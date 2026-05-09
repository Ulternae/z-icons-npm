import React from 'react';

export interface MinaStopWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopWavesSolid: React.FC<MinaStopWavesSolidProps>;
export default MinaStopWavesSolid;
