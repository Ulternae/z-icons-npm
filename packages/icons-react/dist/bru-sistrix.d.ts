import React from 'react';

export interface BruSistrixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSistrix: React.FC<BruSistrixProps>;
export default BruSistrix;
