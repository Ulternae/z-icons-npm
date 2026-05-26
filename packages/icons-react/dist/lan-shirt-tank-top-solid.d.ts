import React from 'react';

export interface LanShirtTankTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtTankTopSolid: React.FC<LanShirtTankTopSolidProps>;
export default LanShirtTankTopSolid;
