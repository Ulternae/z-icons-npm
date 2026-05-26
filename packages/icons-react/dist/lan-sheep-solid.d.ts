import React from 'react';

export interface LanSheepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheepSolid: React.FC<LanSheepSolidProps>;
export default LanSheepSolid;
