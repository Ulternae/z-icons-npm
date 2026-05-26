import React from 'react';

export interface LanWaveSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSineThin: React.FC<LanWaveSineThinProps>;
export default LanWaveSineThin;
