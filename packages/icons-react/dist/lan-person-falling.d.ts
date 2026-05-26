import React from 'react';

export interface LanPersonFallingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFalling: React.FC<LanPersonFallingProps>;
export default LanPersonFalling;
