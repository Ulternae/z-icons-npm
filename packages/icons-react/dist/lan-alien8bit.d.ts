import React from 'react';

export interface LanAlien8bitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlien8bit: React.FC<LanAlien8bitProps>;
export default LanAlien8bit;
