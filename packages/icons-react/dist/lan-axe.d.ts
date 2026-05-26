import React from 'react';

export interface LanAxeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxe: React.FC<LanAxeProps>;
export default LanAxe;
