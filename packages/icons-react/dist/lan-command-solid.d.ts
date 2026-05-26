import React from 'react';

export interface LanCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommandSolid: React.FC<LanCommandSolidProps>;
export default LanCommandSolid;
