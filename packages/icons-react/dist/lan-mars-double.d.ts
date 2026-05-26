import React from 'react';

export interface LanMarsDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsDouble: React.FC<LanMarsDoubleProps>;
export default LanMarsDouble;
