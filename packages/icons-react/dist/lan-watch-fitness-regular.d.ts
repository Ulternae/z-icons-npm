import React from 'react';

export interface LanWatchFitnessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchFitnessRegular: React.FC<LanWatchFitnessRegularProps>;
export default LanWatchFitnessRegular;
