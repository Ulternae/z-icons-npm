import React from 'react';

export interface LanViolinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViolin: React.FC<LanViolinProps>;
export default LanViolin;
