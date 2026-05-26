import React from 'react';

export interface LanExcavatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExcavator: React.FC<LanExcavatorProps>;
export default LanExcavator;
