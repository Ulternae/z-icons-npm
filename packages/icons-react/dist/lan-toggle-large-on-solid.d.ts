import React from 'react';

export interface LanToggleLargeOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOnSolid: React.FC<LanToggleLargeOnSolidProps>;
export default LanToggleLargeOnSolid;
