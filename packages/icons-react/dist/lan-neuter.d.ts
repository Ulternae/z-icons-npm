import React from 'react';

export interface LanNeuterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNeuter: React.FC<LanNeuterProps>;
export default LanNeuter;
