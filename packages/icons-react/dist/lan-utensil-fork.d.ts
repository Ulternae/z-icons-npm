import React from 'react';

export interface LanUtensilForkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilFork: React.FC<LanUtensilForkProps>;
export default LanUtensilFork;
