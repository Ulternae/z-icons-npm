import React from 'react';

export interface MinaDangerWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerWavesSolid: React.FC<MinaDangerWavesSolidProps>;
export default MinaDangerWavesSolid;
