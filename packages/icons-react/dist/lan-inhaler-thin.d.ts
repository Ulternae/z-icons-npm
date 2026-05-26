import React from 'react';

export interface LanInhalerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInhalerThin: React.FC<LanInhalerThinProps>;
export default LanInhalerThin;
