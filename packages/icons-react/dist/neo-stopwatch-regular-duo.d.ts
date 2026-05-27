import React from 'react';

export interface NeoStopwatchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStopwatchRegularDuo: React.FC<NeoStopwatchRegularDuoProps>;
export default NeoStopwatchRegularDuo;
