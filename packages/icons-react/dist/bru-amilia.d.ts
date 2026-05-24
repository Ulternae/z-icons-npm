import React from 'react';

export interface BruAmiliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAmilia: React.FC<BruAmiliaProps>;
export default BruAmilia;
