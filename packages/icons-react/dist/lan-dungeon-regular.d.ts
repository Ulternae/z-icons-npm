import React from 'react';

export interface LanDungeonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDungeonRegular: React.FC<LanDungeonRegularProps>;
export default LanDungeonRegular;
