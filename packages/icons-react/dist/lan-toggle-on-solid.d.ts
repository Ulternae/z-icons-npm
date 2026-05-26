import React from 'react';

export interface LanToggleOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOnSolid: React.FC<LanToggleOnSolidProps>;
export default LanToggleOnSolid;
