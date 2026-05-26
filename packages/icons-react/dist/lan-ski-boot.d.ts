import React from 'react';

export interface LanSkiBootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkiBoot: React.FC<LanSkiBootProps>;
export default LanSkiBoot;
