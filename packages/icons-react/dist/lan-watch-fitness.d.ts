import React from 'react';

export interface LanWatchFitnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchFitness: React.FC<LanWatchFitnessProps>;
export default LanWatchFitness;
