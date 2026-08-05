import React from 'react';

export interface LanWatchFitnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchFitness(props: LanWatchFitnessProps): React.ReactElement;
export default LanWatchFitness;
