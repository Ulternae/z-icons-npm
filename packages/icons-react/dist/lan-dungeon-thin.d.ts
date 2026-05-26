import React from 'react';

export interface LanDungeonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDungeonThin: React.FC<LanDungeonThinProps>;
export default LanDungeonThin;
