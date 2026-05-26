import React from 'react';

export interface LanChopsticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChopsticksSolid: React.FC<LanChopsticksSolidProps>;
export default LanChopsticksSolid;
