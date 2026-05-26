import React from 'react';

export interface LanFerryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerry: React.FC<LanFerryProps>;
export default LanFerry;
