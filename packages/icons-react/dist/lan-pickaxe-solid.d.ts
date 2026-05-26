import React from 'react';

export interface LanPickaxeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickaxeSolid: React.FC<LanPickaxeSolidProps>;
export default LanPickaxeSolid;
