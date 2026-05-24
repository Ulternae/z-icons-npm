import React from 'react';

export interface BruEnviraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEnvira: React.FC<BruEnviraProps>;
export default BruEnvira;
