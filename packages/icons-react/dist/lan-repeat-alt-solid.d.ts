import React from 'react';

export interface LanRepeatAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatAltSolid: React.FC<LanRepeatAltSolidProps>;
export default LanRepeatAltSolid;
