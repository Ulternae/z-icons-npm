import React from 'react';

export interface LanRepeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatSolid: React.FC<LanRepeatSolidProps>;
export default LanRepeatSolid;
