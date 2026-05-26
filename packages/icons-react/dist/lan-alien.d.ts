import React from 'react';

export interface LanAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlien: React.FC<LanAlienProps>;
export default LanAlien;
