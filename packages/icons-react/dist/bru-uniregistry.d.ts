import React from 'react';

export interface BruUniregistryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUniregistry: React.FC<BruUniregistryProps>;
export default BruUniregistry;
