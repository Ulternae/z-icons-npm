import React from 'react';

export interface LanDungeonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDungeonSolid: React.FC<LanDungeonSolidProps>;
export default LanDungeonSolid;
