import React from 'react';

export interface CoreBellRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellRing: React.FC<CoreBellRingProps>;
export default CoreBellRing;
