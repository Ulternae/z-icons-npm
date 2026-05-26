import React from 'react';

export interface LanAxeBattleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeBattleSolid: React.FC<LanAxeBattleSolidProps>;
export default LanAxeBattleSolid;
