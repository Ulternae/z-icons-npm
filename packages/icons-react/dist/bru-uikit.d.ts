import React from 'react';

export interface BruUikitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUikit: React.FC<BruUikitProps>;
export default BruUikit;
