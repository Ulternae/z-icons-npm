import React from 'react';

export interface LanDungeonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDungeon: React.FC<LanDungeonProps>;
export default LanDungeon;
