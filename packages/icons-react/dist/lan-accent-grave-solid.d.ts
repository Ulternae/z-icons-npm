import React from 'react';

export interface LanAccentGraveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAccentGraveSolid: React.FC<LanAccentGraveSolidProps>;
export default LanAccentGraveSolid;
