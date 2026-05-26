import React from 'react';

export interface LanFlagPennantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagPennantSolid: React.FC<LanFlagPennantSolidProps>;
export default LanFlagPennantSolid;
