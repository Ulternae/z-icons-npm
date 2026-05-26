import React from 'react';

export interface LanInhalerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInhaler: React.FC<LanInhalerProps>;
export default LanInhaler;
