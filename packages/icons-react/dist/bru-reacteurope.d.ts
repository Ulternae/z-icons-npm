import React from 'react';

export interface BruReacteuropeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruReacteurope: React.FC<BruReacteuropeProps>;
export default BruReacteurope;
