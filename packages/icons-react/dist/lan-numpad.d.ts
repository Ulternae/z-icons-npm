import React from 'react';

export interface LanNumpadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNumpad: React.FC<LanNumpadProps>;
export default LanNumpad;
