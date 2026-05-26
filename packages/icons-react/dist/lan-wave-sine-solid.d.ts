import React from 'react';

export interface LanWaveSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSineSolid: React.FC<LanWaveSineSolidProps>;
export default LanWaveSineSolid;
