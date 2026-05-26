import React from 'react';

export interface LanWaveSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSquareThin: React.FC<LanWaveSquareThinProps>;
export default LanWaveSquareThin;
