import React from 'react';

export interface BruAccusoftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAccusoft: React.FC<BruAccusoftProps>;
export default BruAccusoft;
