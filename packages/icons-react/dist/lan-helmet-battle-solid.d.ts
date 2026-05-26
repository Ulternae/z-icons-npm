import React from 'react';

export interface LanHelmetBattleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetBattleSolid: React.FC<LanHelmetBattleSolidProps>;
export default LanHelmetBattleSolid;
