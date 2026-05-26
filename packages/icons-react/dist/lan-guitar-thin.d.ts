import React from 'react';

export interface LanGuitarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarThin: React.FC<LanGuitarThinProps>;
export default LanGuitarThin;
