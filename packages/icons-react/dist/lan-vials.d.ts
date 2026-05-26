import React from 'react';

export interface LanVialsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVials: React.FC<LanVialsProps>;
export default LanVials;
