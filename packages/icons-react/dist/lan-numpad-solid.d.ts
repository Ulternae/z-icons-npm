import React from 'react';

export interface LanNumpadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNumpadSolid: React.FC<LanNumpadSolidProps>;
export default LanNumpadSolid;
