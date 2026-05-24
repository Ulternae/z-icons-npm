import React from 'react';

export interface BruEmpireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEmpire: React.FC<BruEmpireProps>;
export default BruEmpire;
