import React from 'react';

export interface LanSignal4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal4Solid: React.FC<LanSignal4SolidProps>;
export default LanSignal4Solid;
