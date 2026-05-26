import React from 'react';

export interface LanFootWingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootWing: React.FC<LanFootWingProps>;
export default LanFootWing;
