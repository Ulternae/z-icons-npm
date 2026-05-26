import React from 'react';

export interface LanToggleOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOff: React.FC<LanToggleOffProps>;
export default LanToggleOff;
