import React from 'react';

export interface BruCodiepieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCodiepie: React.FC<BruCodiepieProps>;
export default BruCodiepie;
