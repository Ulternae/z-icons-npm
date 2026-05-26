import React from 'react';

export interface LanWavesSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWavesSineThin: React.FC<LanWavesSineThinProps>;
export default LanWavesSineThin;
