import React from 'react';

export interface LanWavesSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWavesSineSolid: React.FC<LanWavesSineSolidProps>;
export default LanWavesSineSolid;
