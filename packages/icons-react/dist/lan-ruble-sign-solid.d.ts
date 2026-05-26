import React from 'react';

export interface LanRubleSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRubleSignSolid: React.FC<LanRubleSignSolidProps>;
export default LanRubleSignSolid;
