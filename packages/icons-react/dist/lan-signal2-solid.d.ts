import React from 'react';

export interface LanSignal2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal2Solid: React.FC<LanSignal2SolidProps>;
export default LanSignal2Solid;
