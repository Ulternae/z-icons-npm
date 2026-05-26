import React from 'react';

export interface LanHomeLgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeLg: React.FC<LanHomeLgProps>;
export default LanHomeLg;
